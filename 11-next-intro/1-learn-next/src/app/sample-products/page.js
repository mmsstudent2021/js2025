import Link from "next/link";

export default function Page() {
  return (
    <div className=" flex flex-col gap-3 p-5">
      <Link
        href={"/products/apple"}
        className=" border flex justify-between p-2 "
      >
        <h3>Apple</h3>
        <p>300 MMK</p>
      </Link>
      <Link
        href={"/products/orange"}
        className=" border flex justify-between p-2 "
      >
        <h3>Orange</h3>
        <p>500 MMK</p>
      </Link>
      <Link
        href={"/products/mango"}
        className=" border flex justify-between p-2 "
      >
        <h3>Mango</h3>
        <p>1500 MMK</p>
      </Link>
    </div>
  );
}
