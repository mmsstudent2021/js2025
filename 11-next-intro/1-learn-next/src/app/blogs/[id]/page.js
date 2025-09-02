import { blogs } from "@/constants/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const currentBlog = blogs.find((blog) => blog.id == id);
  return (
    <div className=" flex flex-col gap-3 p-5">
      <nav>
        <Link href={"/blogs"}> &lt; All Blog</Link>
      </nav>
      <div>
        <h1 className=" font-bold text-2xl"> {currentBlog.title} </h1>

        <p>{currentBlog.description}</p>
      </div>
    </div>
  );
}
