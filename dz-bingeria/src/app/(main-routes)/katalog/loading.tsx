import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <p>Učitavanje kataloga serija...</p>
      <div className="loader"></div>
    </div>
  );
}
