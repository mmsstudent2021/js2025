import Header from "./components/Header";
import InventorySection from "./components/InventorySection";
import VoucherSection from "./components/VoucherSection";

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <Header />
        <div className=" flex-1 grid grid-cols-7">
          <InventorySection />
          <VoucherSection />
        </div>
      </main>
    </>
  );
};

export default App;
