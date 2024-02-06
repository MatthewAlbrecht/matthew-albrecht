import fs from "fs";
import { type Route } from "next";
import Link from "next/link";
import path from "path";

export default async function Page() {
  const dir = path.join(process.cwd(), "./src/app/blog/(blogs)");
  const blogFiles = fs.readdirSync(dir);

  const blogSlugs = blogFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    return slug;
  });

  return (
    <div>
      BLOG PAGE
      <ul className="space-y-1">
        {blogSlugs.map((slug) => (
          <Link className="block" key={slug} href={`/blog/${slug}` as Route}>
            {slug}
          </Link>
        ))}
      </ul>
    </div>
  );
}
