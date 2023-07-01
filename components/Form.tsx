
"use client"

import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    },
  });
  const onsubmit:SubmitHandler<FieldValues>=(data)=>{
    console.log("dfata",data);
    console.log("errors",errors);
    
    
  }
  return (
    <div className="flex items-center justify-center mt-10 text-black ">
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col ">
        <input {...register("name",{required:true})} type="text" placeholder="name" />
        <p className="bg-red-200 ">
          {errors.name?.message}
        </p>
        <input {...register("surname")} type="text" placeholder="surname" />
        <input {...register("email")} type="email" placeholder="email" />
        <input {...register("password")} type="password" placeholder="password" />
        <input  {...register("age")}type="number" placeholder="age" />

        <input {...register("gender")} type="radio" name="gender" value="male" />
        <input  {...register("gender")} type="radio" name="gender" value="female" />
    <input type="submit" value="submit" className="text-gray-700 " />
      </form>
    </div>
  );
};

export default Form;
