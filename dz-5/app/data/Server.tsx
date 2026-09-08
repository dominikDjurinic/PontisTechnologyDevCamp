export type User = {
  id: string;
  firstName: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export const all_users: User[] = [];

// Simulacija servera s podacima
export const getUser = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...all_users]);
    }, 1000); // 1 sec odgoda
  });
};
