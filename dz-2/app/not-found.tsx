import Image from "next/image";

// Prilagodena Not Found stranica
export default function NotFound() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl font-bold my-5">404 Not Found</h1>
      <Image
        className="m-3 rounded-full w-auto h-auto"
        src="/notfound.png"
        alt="notfound-icon"
        width={200}
        height={200}
        loading="eager"
      />
    </div>
  );
}
