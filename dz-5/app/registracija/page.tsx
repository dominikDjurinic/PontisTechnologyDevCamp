import UserForm from "../components/UserForm";
import { getUser, User } from "../data/Server";

export default async function RegistrationPage() {
  const users: User[] = await getUser();

  return (
    <div className="flex flex-col items-center w-full gap-10 py-10">
      <h1 className="font-bold text-2xl">Registracija</h1>
      <UserForm />
      <h1 className="font-bold text-2xl">Registrirani korisnici</h1>
      <div className="w-[50%]">
        {users.map((user) => {
          return (
            <div key={user.id} className="w-full flex gap-10">
              <p>{user.firstName}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
