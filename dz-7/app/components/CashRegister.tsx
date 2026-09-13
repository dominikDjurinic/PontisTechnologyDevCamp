"use client";

import { useUIState } from "../store/uiState";
import ListByQuery from "./ListByQuery";
import ListQueryInput from "./ListQueryInput";
import ModalElement from "./ModalElement";
import Image from "next/image";

export default function CashRegister() {
  const activeModal = useUIState((s) => s.activeModal);
  if (!activeModal) return null;

  return (
    <div className="relative z-10 my-5 w-[80%]  md:w-[50%] rounded-2xl bg-gray-200 shadow-gray-400 shadow-2xl flex flex-col justify-center items-center">
      <ModalElement />
      <Image
        className="w-auto h-auto p-10"
        src={activeModal === "BAR" ? "/bar.png" : "/pastry.png"}
        alt="logo"
        width={100}
        height={100}
      />
      <ListQueryInput />
      <ListByQuery />
    </div>
  );
}
