import { getAllPosts, getPostBySlug } from "/lib/posts.js";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post?.title || "Post" };
}

export default async function BlogPost({ params }) {
  const posts = getAllPosts();
  const postIndex = posts.findIndex(p => p.slug === params.slug);
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const nextPost = posts[postIndex - 1];
  const prevPost = posts[postIndex + 1];

  const relatedPosts = posts.filter(
    p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag))
  ).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Banner */}
      <img
        src={post.banner}
        alt={post.title}
        className="w-full h-48 sm:h-64 object-cover rounded-xl shadow mb-6"
      />

      {/* Title & Meta */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{post.title}</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-4">
        By <span className="font-medium">{post.author}</span> • {new Date(post.date).toLocaleDateString()}
      </p>

      {/* Content */}
      <article
        className="prose prose-base sm:prose-lg max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-8">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Share Buttons */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-2">Share this post:</h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + "https://yourdomain.com/blog/" + post.slug)}`}
            target="_blank"
            className="text-green-600 underline"
          >WhatsApp</a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/blog/${post.slug}`}
            target="_blank"
            className="text-blue-600 underline"
          >Facebook</a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://yourdomain.com/blog/${post.slug}`}
            target="_blank"
            className="text-sky-500 underline"
          >Twitter</a>
        </div>
      </div>

      {/* Prev/Next Navigation */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 text-sm text-blue-600">
        {prevPost ? (
          <Link href={`/blog/${prevPost.slug}`} className="hover:underline">
            ← {prevPost.title}
          </Link>
        ) : <span />}
        {nextPost ? (
          <Link href={`/blog/${nextPost.slug}`} className="hover:underline">
            {nextPost.title} →
          </Link>
        ) : <span />}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map(rp => (
              <Link
                href={`/blog/${rp.slug}`}
                key={rp.slug}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <p className="text-md font-semibold">{rp.title}</p>
                <p className="text-sm text-gray-500">{new Date(rp.date).toLocaleDateString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Disqus Comments */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <div id="disqus_thread" />
        <script>
          {`
            var disqus_config = function () {
              this.page.url = "https://yourdomain.com/blog/${post.slug}";
              this.page.identifier = "${post.slug}";
            };
            (function() {
              var d = document, s = d.createElement('script');
              s.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
            })();
          `}
        </script>
      </div>
    </div>
  );
}
