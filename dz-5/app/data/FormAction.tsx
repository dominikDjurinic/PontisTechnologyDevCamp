"use server";

import { revalidatePath } from "next/cache";
import { all_users, User } from "./Server";
import { success } from "zod";
import { error } from "console";
import { shema } from "../lib/zodShema";

export type UserForm = {
  firstName: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export type UserResponse = {
  success: boolean;
  error: string;
  data?: User;
};

// Server Action - dodavanje novog korisnika
export async function addUser(formData: UserForm) {
  const validUserData = shema.safeParse(formData); //dodatna zod validacija

  if (!validUserData.success) {
    console.log(validUserData.error);
    return {
      success: false,
      error: validUserData.error.message,
    };
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    firstName: validUserData.data?.firstName,
    email: validUserData.data?.email,
    password: validUserData.data?.password,
    confirmedPassword: validUserData.data?.confirmedPassword,
  };

  all_users.push(newUser);

  return {
    success: true,
    error: "",
    data: newUser,
  };

  //revalidatePath("/registracija");
}
