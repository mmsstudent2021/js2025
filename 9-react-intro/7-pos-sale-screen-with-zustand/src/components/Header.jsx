import { Bell, Moon, RefreshCcw, User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between border-b border-gray-200 dark:border-gray-700 px-5 py-4">
      <h1 className="font-heading font-bold dark:text-gray-200 text-xl">
        Coo' Bakery
      </h1>
      <div className="flex gap-5 ">
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <Moon className=" size-6" />
        </button>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <RefreshCcw className=" size-6" />
        </button>
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <Bell className=" size-6" />
        </button>

        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <User className=" size-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
