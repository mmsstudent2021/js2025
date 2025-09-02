import BlogCard from "@/components/BlogCard";
import { blogs } from "@/constants/blog";

export default function Page() {
  return (
    <div className=" flex-col flex gap-3 p-5">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
