import Link from "next/link";

const BlogCard = ({ blog: { id, title } }) => {
  return (
    <div className=" p-2 border flex justify-between">
      <h1>{title}</h1>
      <Link href={`/blogs/${id}`} className=" underline">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
