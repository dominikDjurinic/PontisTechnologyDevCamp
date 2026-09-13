"use client";

import { useUIState } from "../store/uiState";

export default function Header() {
  const openModal = useUIState((s) => s.openModal);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-200 py-5">
      <h1 className="text-3xl m-5 uppercase font-bold">Blagajna</h1>
      <div className="flex justify-center items-center w-full gap-5 flex-wrap">
        <button
          className="bg-blue-500 text-white w-50 p-3 rounded-2xl cursor-pointer"
          onClick={() => openModal("BAR")}
        >
          KAFIĆ
        </button>
        <button
          className="bg-blue-500 text-white w-50 p-3 rounded-2xl cursor-pointer"
          onClick={() => openModal("PASTRY")}
        >
          SLASTIČARNA
        </button>
      </div>
    </div>
  );
}
