import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();

  console.log(json);
  return (
    <div className=" flex flex-col gap-3 p-5">
      {json.map((el) => (
        <Link
          key={el.id}
          href={`/products/${el.id}`}
          className=" border flex justify-between p-2 gap-5 "
        >
          <h3>
            <span className=" line-clamp-1">{el.title}</span>
          </h3>
          <p className=" text-nowrap">{el.price} MMK</p>
        </Link>
      ))}
    </div>
  );
}
