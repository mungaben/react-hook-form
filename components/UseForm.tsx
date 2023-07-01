"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
type Formtypes = {
  name: string;
  email: string;
  password: string;
  poBox: string;
  gender: string;
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
};
export const englishKings = [
    'William I',
    'William II',
    'Henry I',
    'Stephen',
    'Henry II',
    'Richard I',
    'John',
    'Henry III',
    'Edward I',
    'Edward II',
    'Edward III',
    'Richard II',
    'Henry IV',
    'Henry V',
    'Henry VI',
    'Edward IV',
    'Edward V',
    'Richard III',
    'Henry VII',
    'Henry VIII',
    'Edward VI',
    'Mary I',
    'Elizabeth I',
    'James I',
    'Charles I',
    'Charles II',
    'James II',
    'William III',
    'Mary II',
    'Anne',
    'George I',
    'George II',
    'George III',
    'George IV',
    'William IV',
    'Victoria',
    'Edward VII',
    'George V',
    'Edward VIII',
    'George VI',
    'Elizabeth II',
  ];
  
const Register = () => {
    const [kings, setkings] = useState(englishKings);
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Formtypes>({
   
    defaultValues: {
      name: "",
      email: "",
      password: "",
      poBox: "",
      gender: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
    },
  });
  const onSubmmit = (data: Formtypes) => {
    console.log("data available", data.email);
  };
  const watchInput = watch("name");
  const newkings= englishKings.filter((item) => item.toLowerCase().includes(watchInput.toLowerCase()));
  console.log("englishKings", newkings);
  
  console.log(watchInput);
  if (watchInput) {
    
  console.log("watchInput", watchInput);
 
    
  }
  useEffect(() => {}, [isSubmitSuccessful]);
  return (
    <div className="flex flex-col justify-center w-full mt-40 mb-20 ">
        <div className="flex flex-col items-center justify-center w-40 mx-auto mt-20 mb-10 overflow-y-auto bg-white h-28">
        {newkings.length > 0 ?
        newkings.map((item, index) => 
        <h1 className="flex items-center justify-center p-5 mx-auto text-black" key={index}>
        <p className="text-lg ">
            {item}
        </p>
        </h1>
        ): (
            <div>
                <h1 className="flex items-center justify-center p-5 mx-auto text-black" >
                <p className="text-lg ">
                    NO king
                </p>
                </h1>
            </div>
        )
    }
        </div>
 
     
      <form
        className="p-4 mx-auto overflow-hidden font-serif text-gray-800 bg-gray-200 rounded-lg shadow-md text-start"
        onSubmit={handleSubmit(onSubmmit)}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            {...register("name", {
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 30,
                message: "Name must be less than 30 characters",
              },
            //   validate: (value) => {
            //     const isben = value.includes("ben");
            //     console.log("isben", isben);

            //     return isben ? "owner" : value;
            //   },
            //   valueAsNumber: true,
            })}
            // type="number"
            id="name"
            name="name"
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
          {/* error  */}
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
