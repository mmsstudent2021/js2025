import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CategoryCreateForm = ({  setOpenDrawer }) => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target);
  //     console.log(formData.get("new_category_name"));
  //     storeCategory(formData.get("new_category_name"));
  //     e.target.reset();
  //     setOpenDrawer(false);
  //   };

  //   console.log(useForm());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => {
    // console.log(data);
    // storeCategory(data.new_category_name);
    reset();
    toast.success("New Category is created");
    setOpenDrawer(false);
  };

  const handleCancel = () => {
    setOpenDrawer(false);
  };

  return (
    <div className=" px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="new_category_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Category Name
          </label>
          <input
            type="text"
            id="new_category_name"
            {...register("new_category_name", {
              required: {
                value: true,
                message: "New Category name is required",
              },
              minLength: {
                value: 4,
                message: "Min length is 4",
              },
            })}
            className={`bg-gray-50 border ${
              errors.new_category_name
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. drink"
          />
          {errors.new_category_name && (
            <p className=" text-red-500 text-sm mt-1">
              {errors.new_category_name.message}
            </p>
          )}
        </div>
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I'm sure to create new category
          </label>
        </div>
        <div className=" flex gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryCreateForm;
