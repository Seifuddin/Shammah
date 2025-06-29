import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { slug, ...data };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();
  return { slug, content: htmlContent, ...data };
}
