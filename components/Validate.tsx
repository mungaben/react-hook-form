"use client";

import React, { useEffect } from "react";
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
const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Formtypes>();
  const onSubmmit = (data: Formtypes) => {
    console.log("data available", data.email);
  };
  const watchInput = watch("name");
  console.log(watchInput);
  if (watchInput) {
    console.log(watchInput);
  }
  useEffect(() => {}, [isSubmitSuccessful]);
  return (
    <div className="flex flex-col justify-center w-full mt-40 mb-20">
      <h1 className="flex items-center justify-center p-5 bg-black">
        validate
      </h1>
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
              validate: (value) => {
                const isben = value.includes("ben");
                console.log("isben", isben);

                return isben ? "owner" : value;
              },
            })}
            type="text"
            id="name"
            name="name"
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
          {/* error  */}
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            {...register("email", {
              maxLength: {
                value: 30,
                message: "Email must be less than 30 characters",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            type="email"
            id="email"
            name="email"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="poBox"
            className="block text-sm font-medium text-gray-700"
          >
            PO Box:
          </label>
          <input
            {...register("poBox")}
            type="text"
            id="poBox"
            name="poBox"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender:
          </label>
          <select
            {...register("gender", {
              maxLength: {
                value: 30,
                message: "Gender must be less than 30 characters",
              },
              required: {
                value: true,
                message: "Gender is required",
              },
            })}
            id="gender"
            name="gender"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          >
            <option value="" className="text-gray-400">
              -- Select --
            </option>
            <option value="male" className="text-gray-900">
              Male
            </option>
            <option value="female" className="text-gray-900">
              Female
            </option>
            <option value="other" className="text-gray-900">
              Other
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="input1"
            className="block text-sm font-medium text-gray-700"
          >
            phone number:
          </label>
          <input
            {...register("input1", {
              pattern: /[A-Za-z]{3}/,
            })}
            id="input1"
            name="input1"
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        {/* error */}
        {errors.input1 && (
          <p className="mt-1 text-xs text-red-500">{errors.input1.message}</p>
        )}
        <div className="mb-4">
          <label
            htmlFor="input2"
            className="block text-sm font-medium text-gray-700"
          >
            Input 2:
          </label>
          <input
            {...register("input2")}
            type="text"
            id="input2"
            name="input2"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="input3"
            className="block text-sm font-medium text-gray-700"
          >
            Input 3:
          </label>
          <input
            {...register("input3")}
            type="text"
            id="input3"
            name="input3"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="input4"
            className="block text-sm font-medium text-gray-700"
          >
            Input 4:
          </label>
          <input
            {...register("input4")}
            type="text"
            id="input4"
            name="input4"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="input5"
            className="block text-sm font-medium text-gray-700"
          >
            Input 5:
          </label>
          <input
            {...register("input5")}
            type="text"
            id="input5"
            name="input5"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
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
