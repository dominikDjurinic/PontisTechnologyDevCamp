"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addUser, UserResponse, type UserForm } from "../data/FormAction";
import { useRouter } from "next/navigation";
import { shema } from "../lib/zodShema";

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shema),
  });

  const router = useRouter();

  const onSubmit = async (data: UserForm) => {
    const resp: UserResponse = await addUser(data);

    if (!resp.success) {
      console.log(resp.error);
    }
    router.push(`/dobrodosli/${resp.data?.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5 w-[50%]"
    >
      <label>Ime korisnika</label>
      <input
        {...register("firstName")}
        className="border border-black w-full p-2"
      />
      {errors.firstName && (
        <span className="text-red-500">{errors.firstName.message}</span>
      )}
      <label>E-mail</label>
      <input
        {...register("email")}
        className="border border-black w-full p-2"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label>Lozinka</label>
      <input
        type="password"
        {...register("password")}
        className="border border-black w-full p-2"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <label>Potvrda lozinke</label>
      <input
        type="password"
        {...register("confirmedPassword")}
        className="border border-black w-full p-2"
      />
      {errors.confirmedPassword && (
        <span className="text-red-500">{errors.confirmedPassword.message}</span>
      )}
      <button
        type="submit"
        className="w-full bg-purple-600 font-bold text-white p-5 cursor-pointer"
      >
        Prijava
      </button>
    </form>
  );
}
