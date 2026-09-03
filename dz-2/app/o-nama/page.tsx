type TextStyle = {
  color: string;
  text: string;
};

// Kartice za tekstualne dijelove
function TextCard({ color, text }: TextStyle) {
  return <div className={`w-[90%] ${color} p-5 rounded-2xl`}>{text}</div>;
}

// O nama stranica na ruti /o-nama
export default function Onama() {
  const about_stories: TextStyle[] = [
    {
      color: "bg-red-200",
      text: "Pontis Technology je hrvatska tvrtka za IT usluge s uredima u Hrvatskoj,Njemačkoj i Bosni i Hercegovini. Pontis Technology je tvrtka u vlasništvu Ponteve. Ponteva je članica Bridgewest Grupe, globalne privatne investicijske tvrtke.",
    },
    {
      color: "bg-green-200",
      text: "Pontis na latinskom znači most. Odabrali smo Pontis jer odražava vezu koju želimo stvoriti između vašeg problema i našeg rješenja. Koristimo širok raspon front-end i back-end kompetencija kako bismo pomogli tvrtkama u izgradnji jedinstvenog softvera i složenih rješenja zasnovanih na umjetnoj inteligenciji.",
    },
    {
      color: "bg-blue-200",
      text: "Osim razvoja i poboljšanja softverskih rješenja za multinacionalne tvrtke i javne institucije, pomažemo i u izgradnji digitalnih proizvoda za moderne tvrtke i skaliranju njihovih timova, bilo da se radi o startupima ili etabliranim poduzećima. Podržavamo cijeli ciklus razvoja softvera zahvaljujući našem vrijednom timu Back-End i Front-End inženjera, QA testera, podatkovnih inženjera, inženjera strojnog učenja, DevOps inženjera, UX/UI dizajnera, voditelja projekata i tehničkih pisaca.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold my-5">O nama</h2>
      {about_stories.map((story) => {
        return (
          <TextCard key={story.color} color={story.color} text={story.text} />
        );
      })}
    </div>
  );
}
