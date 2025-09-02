import Link from "next/link";

const Header = () => {
  return (
    <header className="  w-full bg-sky-400 text-black p-2">
      <div className=" flex justify-between">
        <h1>Next App</h1>
        <nav className=" flex gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/products"}>Our Products</Link>
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Link href={"/contact-us"}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
