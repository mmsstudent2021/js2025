import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();

  console.log(json);
  return (
    <div className=" flex flex-col gap-3 p-5">
      <nav>
        <Link href={"/products"}> &lt; All products</Link>
      </nav>
      <div>
        <h1 className=" font-bold text-2xl"> {json.title} </h1>

        <p>{json.description}</p>

        <Image src={json.image} alt="apple photo" width={500} height={500} />
      </div>
    </div>
  );
}
