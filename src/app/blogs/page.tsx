import { posts } from "@/data/post";
import Link from "next/link";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link className="bg-white p-4 rounded-md shadow-md" key={post.id} href={`/blogs/${post.id}`}>
            <h2 className="text-xl font-bold">{post.id}</h2>
            <p>Written by: {post.username}</p>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default BlogsPage;
