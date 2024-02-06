import Link from "next/link";
import { getPageSession } from "~/server/api/trpc";
import { z } from "zod";
import { SubmitButton } from "../_components/submit-button";
import { Input } from "../_components/ui/input";
import { Label } from "../_components/ui/label";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, db, users } from "~/db";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

const emailSchema = z.string().min(4).max(31);
const passwordSchema = z.string().min(6).max(255);

const Page = async () => {
  const { session } = await getPageSession();
  if (session) redirect("/");

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email and password to login to your account
        </p>
      </div>
      <form action={loginUser} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder="Email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required type="password" />
        </div>
        <SubmitButton className="w-full" text="Login" />
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link className="underline" href="/signup">
          Sign up
        </Link>
      </div>
    </>
  );
};

export default Page;

async function loginUser(formData: FormData) {
  "use server";
  const emailValidation = emailSchema.safeParse(formData.get("email"));
  const passwordValidation = passwordSchema.safeParse(formData.get("password"));

  if (!emailValidation.success) {
    return {
      error: emailValidation.error.flatten(),
    };
  }
  if (!passwordValidation.success) {
    return {
      error: passwordValidation.error.flatten(),
    };
  }

  const email = emailValidation.data;
  const password = passwordValidation.data;

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  if (!existingUser) {
    // NOTE:
    // Returning immediately allows malicious actors to figure out valid usernames from response times,
    // allowing them to only focus on guessing passwords in brute-force attacks.
    // As a preventive measure, you may want to hash passwords even for invalid usernames.
    // However, valid usernames can be already be revealed with the signup page among other methods.
    // It will also be much more resource intensive.
    // Since protecting against this is none-trivial,
    // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
    // If usernames are public, you may outright tell the user that the username is invalid.
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashedPassword,
    password,
  );
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/");
}
