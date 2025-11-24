import { randomInt } from "node:crypto";
import { refresh } from "next/cache";
import * as z from "zod";
import { redirect } from "next/navigation";

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

const fakeNetworkDelay = () => {
  // Source - https://stackoverflow.com/a/63006702
  // Posted by Ronit Roy, modified by community. See post 'Timeline' for change history
  // Retrieved 2025-11-22, License - CC BY-SA 4.0
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return timeout(randomInt(5) * 200);
};

export async function getUsers() {
  "use server";

  await fakeNetworkDelay();
  return dbSelectAllUsers;
}

export async function getUser(userId: string): Promise<User | undefined> {
  "use server";

  const foundUser = dbSelectAllUsers.find((user) => user.id === userId);

  await fakeNetworkDelay();
  return foundUser;
}

export async function getInterests() {
  "use server";

  await fakeNetworkDelay();
  return dbSelectAllInterests;
}

export async function getCountries() {
  "use server";

  await fakeNetworkDelay();
  return dbSelectAllCountries;
}

export async function signUpForm(formData: FormData) {
  "use server";

  await fakeNetworkDelay();

  const schema = z.object({
    name: z.string().min(1),
    age: z.coerce.number().min(18).max(150),
    country: z.string().min(1),
    interests: z.array(z.string()).min(1),
  });

  const dob = new Date(formData.get("dob") as string);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  console.log(formData.getAll("interests"));

  const safeParseResult = schema.safeParse({
    name: formData.get("name"),
    age: age,
    country: formData.get("country"),
    interests: formData.getAll("interests"),
  });

  if (safeParseResult.success) {
    const user: User = {
      id: crypto.randomUUID(),
      name: safeParseResult.data.name,
      age: safeParseResult.data.age,
      country: safeParseResult.data.country,
      interests: safeParseResult.data.interests,
    };
    console.log(`New user registered: ${user.name} (ID: ${user.id})`);
    dbSelectAllUsers.push(user);
    console.log(`Total users: ${dbSelectAllUsers.length}`);
    refresh();
  } else {
    const { fieldErrors } = safeParseResult.error.flatten();
    const params = new URLSearchParams();
    console.log(`Zod parse failed with errors: `, fieldErrors);
    for (const [field, messages] of Object.entries(fieldErrors)) {
      if (!messages || messages.length === 0) continue;
      params.set(`${field}_error`, messages[0]);
    }
    redirect(`/sign-up?${params.toString()}`);
  }
}
