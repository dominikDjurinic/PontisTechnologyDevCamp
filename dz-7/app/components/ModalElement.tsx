"use client";

import { useUIState } from "../store/uiState";

export default function ModalElement() {
  const activeModal = useUIState((s) => s.activeModal);
  const closeModal = useUIState((s) => s.closeModal);

  if (!activeModal) return null;

  return (
    <div className="w-full flex items-center justify-center">
      <h2 className="text-xl font-bold uppercase my-15 md:my-10">
        Blagajna za {activeModal === "BAR" ? "kafić" : "slastičarnu"}
      </h2>
      <button
        className="absolute top-2 right-2 bg-red-500 text-white px-3 py-2 rounded-2xl cursor-pointer hover:bg-red-400"
        onClick={() => closeModal()}
      >
        Close
      </button>
    </div>
  );
}
