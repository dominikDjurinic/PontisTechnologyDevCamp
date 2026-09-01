import Image from "next/image";
import Brojac from "./components/Brojac";

// Osoba tip podataka za props
type OsobaType = {
  id: number;
  ime: string;
  uloga: string;
  opis: string;
};

// Komponenta Kartica s props
function Kartica({ id, ime, uloga, opis }: OsobaType) {
  return (
    <div className="relative w-full md:w-[350px] rounded-2xl bg-gray-300 text-center flex flex-col justify-center items-center p-5 gap-3 text-black">
      <Brojac />
      <Image
        className="m-3 rounded-full w-auto h-auto"
        src="/user.png"
        alt="user-icon"
        width={100}
        height={100}
      />
      <h1 className="text-2xl font-bold">{ime}</h1>
      <p className="text-gray-400 italic">[id: {id}]</p>
      <h2>Uloga:</h2>
      <h2 className="font-bold">{uloga}</h2>
      <p>Opis:</p>
      <p className="font-bold">{opis}</p>
    </div>
  );
}

// Pocetna stranica s karticama
export default function Home() {
  const zaposlenici: OsobaType[] = [
    {
      id: 1,
      ime: "Angelo",
      uloga: "Frontend Engineer",
      opis: "Mentor na programu PT DevCamp 2026 u području frontenda.",
    },
    {
      id: 2,
      ime: "Vladimir",
      uloga: "Backend Engineer",
      opis: "Mentor na programu PT DevCamp 2026 u području backenda.",
    },
    {
      id: 3,
      ime: "Ana",
      uloga: "Senior People and Culture Specialist",
      opis: "HR i koordinatorica na programu PT DevCamp 2026.",
    },
    {
      id: 4,
      ime: "Siniša",
      uloga: "Engineering Manager",
      opis: "Voditelj programa PT DevCamp 2026.",
    },
    {
      id: 5,
      ime: "Dominik",
      uloga: "DevCamp Student",
      opis: "Polaznik Pontis Technology DevCamp 2026.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold my-5">Pregled zaposlenika</h2>
      <div className="w-[90%] flex flex-col md:flex-row justify-center gap-3 flex-wrap my-5">
        {zaposlenici.map((zaposlenik) => {
          return (
            <Kartica
              key={zaposlenik.id}
              id={zaposlenik.id}
              ime={zaposlenik.ime}
              uloga={zaposlenik.uloga}
              opis={zaposlenik.opis}
            />
          );
        })}
      </div>
    </div>
  );
}
