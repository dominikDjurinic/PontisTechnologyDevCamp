import React from "react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      <Image
        className="w-auto h-auto"
        src={"/404.png"}
        alt={"404"}
        width={100}
        height={100}
      />
      <h2 className="text-2xl md:text-4xl font-bold my-10">404 - Not Found</h2>
      <p>Nije pronađena serija s odabranim id.</p>
    </div>
  );
}
