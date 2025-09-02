import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className=" flex flex-col gap-3 p-5">
      <nav>
        <Link href={"/products"}> &lt; All products</Link>
      </nav>
      <div>
        <h1 className=" font-bold text-2xl"> Apple </h1>

        <p>
          Apple is a leading technology company known for its innovative
          products such as the iPhone, iPad, Mac computers, and Apple Watch.
          Renowned for its design, quality, and ecosystem, Apple continues to
          shape the future of consumer electronics and software.
        </p>

        <Image
          src={"/apple-img.webp"}
          alt="apple photo"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
