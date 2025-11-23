import { randomInt } from "node:crypto";

export type User = {
  id: string;
  name: string;
  age: number;
  country: string;
  interests: string[];
};

const dbSelectAllInterests: string[] = [
  "Gaming",
  "Music",
  "Travel",
  "Cooking",
  "Fitness",
  "Photography",
  "Reading",
  "Movies",
  "Technology",
  "Art",
];

const dbSelectAllCountries: string[] = [
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "Australia",
  "Brazil",
  "India",
  "Netherlands",
];

const dbSelectAllUsers: User[] = [
  {
    name: "Mr Fake",
    age: 85,
    country: dbSelectAllCountries[0],
    id: crypto.randomUUID(),
    interests: [dbSelectAllInterests[0]],
  },
  {
    name: "Miss Fib",
    age: 29,
    country: dbSelectAllCountries[1],
    id: crypto.randomUUID(),
    interests: [dbSelectAllInterests[1]],
  },
];

export async function getUsers() {
  "use server";

  await timeout(randomInt(2) * 1000);
  return dbSelectAllUsers;
}

export async function getUser(userId: string): Promise<User | undefined> {
  "use server";

  const foundUser = dbSelectAllUsers.find((user) => user.id === userId);

  await timeout(randomInt(2) * 1000);
  return foundUser;
}

export async function getInterests() {
  "use server";

  await timeout(randomInt(2) * 1000);
  return dbSelectAllInterests;
}

export async function getCountries() {
  "use server";

  await timeout(randomInt(2) * 1000);
  return dbSelectAllCountries;
}

export async function signUpForm(formData: FormData) {
  "use server";

  const dob = new Date(formData.get("dob") as string);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const user: User = {
    id: crypto.randomUUID(),
    name: formData.get("name") as string,
    age: age,
    country: formData.get("country") as string,
    interests: [],
  };

  await timeout(randomInt(3) * 1000);

  console.log(`New user registered: ${user.name} (ID: ${user.id})`);
  dbSelectAllUsers.push(user);
  console.log(`Total users: ${dbSelectAllUsers.length}`);
}

// Source - https://stackoverflow.com/a/63006702
// Posted by Ronit Roy, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-22, License - CC BY-SA 4.0
function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
