import Image from "next/image";
import LikeCounter from "./components/LikeCounter";

// Osoba tip podataka za props
type Person = {
  id: number;
  name: string;
  role: string;
  description: string;
};

// Komponenta Kartica s props
function Card({ id, name, role, description }: Person) {
  return (
    <div className="relative w-full md:w-[350px] rounded-2xl bg-gray-300 text-center flex flex-col justify-center items-center p-5 gap-3 text-black">
      <LikeCounter />
      <Image
        className="m-3 rounded-full w-auto h-auto"
        src="/user.png"
        alt="user-icon"
        width={100}
        height={100}
      />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-gray-400 italic">[id: {id}]</p>
      <h2>Uloga:</h2>
      <h2 className="font-bold">{role}</h2>
      <p>Opis:</p>
      <p className="font-bold">{description}</p>
    </div>
  );
}

// Pocetna stranica s karticama
export default function Home() {
  const employees: Person[] = [
    {
      id: 1,
      name: "Angelo",
      role: "Frontend Engineer",
      description: "Mentor na programu PT DevCamp 2026 u području frontenda.",
    },
    {
      id: 2,
      name: "Vladimir",
      role: "Backend Engineer",
      description: "Mentor na programu PT DevCamp 2026 u području backenda.",
    },
    {
      id: 3,
      name: "Ana",
      role: "Senior People and Culture Specialist",
      description: "HR i koordinatorica na programu PT DevCamp 2026.",
    },
    {
      id: 4,
      name: "Siniša",
      role: "Engineering Manager",
      description: "Voditelj programa PT DevCamp 2026.",
    },
    {
      id: 5,
      name: "Dominik",
      role: "DevCamp Student",
      description: "Polaznik Pontis Technology DevCamp 2026.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold my-5">Pregled zaposlenika</h2>
      <div className="w-[90%] flex flex-col md:flex-row justify-center gap-3 flex-wrap my-5">
        {employees.map((employee) => {
          return (
            <Card
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              description={employee.description}
            />
          );
        })}
      </div>
    </div>
  );
}
