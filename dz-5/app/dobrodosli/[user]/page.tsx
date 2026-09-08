import React, { use } from "react";

export default async function ProfilePage({
  params,
}: {
  params: { user: string };
}) {
  const { user } = await params;
  //console.log(await params);
  return (
    <div>
      {" "}
      <h1>Pofilna stranica</h1>
      <h1>Korisnik id: {user}</h1>
    </div>
  );
}
