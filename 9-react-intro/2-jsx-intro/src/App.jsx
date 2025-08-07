export default function App() {
  const fruits = ["apple", "banana", "orange", "grape", "mango"];

  const obj = { a: "aaa", b: "bbb" };

  const myName = "hein htet zan";

  const handleBtn = () => {
    console.log("you click learn more btn");
  };

  return (
    <>
      <h1 className=" text-3xl font-bold underline font-sans mb-3">
        Hello React by {myName}
      </h1>

      <div className="">
        <label htmlFor="x"></label>
        <input type="text" id="x" />
      </div>

      <p className=" mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
        numquam molestiae fugit in illo quisquam et labore nulla delectus,
        inventore dolorem quaerat reprehenderit vero ipsam earum maiores?
        Quisquam, culpa illo.
      </p>
      <ul className=" mb-5">
        {fruits.map((el, index) => (
          <li key={index} className=" border mb-1 p-1">
            {el}
          </li>
        ))}
      </ul>
      <button onClick={handleBtn} className=" bg-black text-white p-3">
        Learn More
      </button>
    </>
  );
}
