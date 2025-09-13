import { useState } from "react";
import CounterApp from "./CounterApp";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <main className=" p-10">
      <div className="">
        <button
          onClick={() => setShowCounter(!showCounter)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-green-600 active:scale-95 transition"
        >
          counter
        </button>
        {showCounter && <CounterApp />}
      </div>
    </main>
  );
}

export default App;
