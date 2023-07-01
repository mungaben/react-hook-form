"use client";
import useFoodStore from "@/Hooks/foodstore";
import React, { use, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
type formdata = {
  Search: string;
};

const SearchData = () => {
  const foodsource = useFoodStore((state) => state.food);
  const setfood = useFoodStore((state) => state.setFood);
  const [shownutrients, setShownutrients] = useState(false);
  const [selectedFood, setSelectedFood] = useState<number>();
  // console.log("food",food);
  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formdata>({
    defaultValues: {
      Search: "",
    },
  });
  const search = watch("Search");
  console.log("saerch", search);
  //   check if data  in food  includes search
  const food = foodsource.filter(
    (item) =>
      item?.description?.toLowerCase().includes(search.toLowerCase()) ||
      item?.foodCode?.toLowerCase().includes(search.toLowerCase()) ||
      item?.description?.toLowerCase().includes(search.toLowerCase()) ||
      item?.foodCode?.toLowerCase().includes(search.toLowerCase())||
      item?.dataType?.toLowerCase().includes(search.toLowerCase())
  );
  console.log(food.length);
  

  const onsubmit = (data: formdata) => {
    console.log("onsubmit");
  };

  useEffect(() => {
    food.length === 0 && setfood();
  }, []);


  const toggleNutrients = (index: number) => {
    setSelectedFood(index);
    setShownutrients(!shownutrients);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mx-auto text-black bg-white">
      <div>
        <form
          className="flex items-center justify-center p-4"
          onSubmit={handleSubmit(onsubmit)}
        >
          <input
            {...register("Search", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            type="text"
            name="Search"
            placeholder="Search"
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
          <input
            type="submit"
            value="Search"
            className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
          />
          <p className="mx-4 ">
            {errors.Search && (
              <span className="text-red-500/30">{errors.Search.message}</span>
            )}
          </p>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-100">
        <h2 className="grid mb-4 text-2xl font-bold md:grid-cols-4">Food</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {food && food.length > 0 ? (
            food.map((item, index) => (
              <div
                key={index}
                className="p-4 mb-4 bg-white rounded shadow text-slate-700"
              >
                <h4 className="mb-2 text-lg font-bold">{item.dataType}</h4>
                <p className="mb-1">Description: {item.description}</p>
                <p className="mb-1">fdcId: {item.fdcId}</p>
                <p className="mb-1">foodCode: {item?.foodCode}</p>
                <p className="mb-1">publicationDate: {item?.publicationDate}</p>

                <button
                  onClick={() => toggleNutrients(index)}
                  className="flex justify-center p-1 mb-2 bg-white rounded-md shadow-sm hover:border-[2px] hover:border-slate-400"
                  type="button"
                >
                  {selectedFood === index && shownutrients ? "Hide" : "Show"}
                </button>
                {selectedFood === index && shownutrients && (
                  <div className="mt-2 overflow-y-scroll h-36 ">
                    <p className="mb-1">Food Nutrients</p>
                    <div className="grid ">
                      {item.foodNutrients.map((nutrient, index) => (
                        <div
                          key={index}
                          className="p-2 bg-white rounded-md shadow-md"
                        >
                          <p className="mb-1">Amount: {nutrient?.amount}</p>
                          <p className="mb-1"> Name:{nutrient?.name}</p>
                          <p className="mb-1"> Number:{nutrient?.number}</p>
                          <p className="mb-1">
                            {" "}
                            UnitName: {nutrient?.unitName}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Render other properties as needed */}
              </div>
            ))
          ) : (
            <div className="">
              <p className="text-red-500">No food data available</p>
            </div>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default SearchData;
