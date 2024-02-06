import Link from "next/link";
import { lucia, users, db } from "~/db";
import { redirect } from "next/navigation";
import { getPageSession } from "~/server/api/trpc";
import { z } from "zod";
import { SubmitButton } from "../_components/submit-button";
import { Label } from "../_components/ui/label";
import { Input } from "../_components/ui/input";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { generateId } from "lucia";

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6).max(255);

const Page = async () => {
  const { session } = await getPageSession();
  if (session) redirect("/");

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Signup</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your username and password to setup your account
        </p>
      </div>
      <form action={signupUser} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required type="password" />
        </div>
        <SubmitButton className="w-full" text="Signup" />
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link className="underline" href="/login">
          Signup
        </Link>
      </div>
    </>
  );
};

export default Page;

async function signupUser(formData: FormData) {
  "use server";
  const emailValidation = emailSchema.safeParse(formData.get("email"));
  const passwordValidation = passwordSchema.safeParse(formData.get("password"));

  if (!emailValidation.success) {
    return {
      errors: emailValidation.error.flatten(),
    };
  }
  if (!passwordValidation.success) {
    return {
      errors: passwordValidation.error.flatten(),
    };
  }

  const email = emailValidation.data;
  const password = passwordValidation.data;

  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  // TODO: check if username is already used
  await db.insert(users).values({
    id: userId,
    email,
    hashedPassword,
  });

  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
