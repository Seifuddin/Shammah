// ✅ Remove "use client";
import Link from "next/link";
import { getAllPosts } from "/lib/posts"; // Adjust path if needed

export default function LatestBlogSection() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Latest from Our Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
            <img
              src={post.banner}
              alt={post.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-blue-600">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="inline-block text-blue-700 font-medium hover:underline"
        >
          View all blog posts →
        </Link>
      </div>
    </section>
  );
}
