"use client";

import React from "react";
import { useForm } from "react-hook-form";
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
  const { register, watch } = useForm<Formtypes>();
  return (
    <div  className="flex justify-center w-full overflow-">
      <form className="w-64 p-4 overflow-hidden bg-gray-200 rounded-lg shadow-md ">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            {...register("email")}
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
            {...register("gender")}
            id="gender"
            name="gender"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="input1"
            className="block text-sm font-medium text-gray-700"
          >
            Input 1:
          </label>
          <input
            {...register("input1")}
            type="text"
            id="input1"
            name="input1"
            required
            className="px-2 py-1 mt-1 border border-gray-400 rounded"
          />
        </div>
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
