export type User = {
  name: string;
  age: number;
  country: string;
  interests: string[];
};

const usersMap = new Map<string, User>();

export async function signUp(formData: FormData) {
  "use server";

  const dob = new Date(formData.get("dob") as string);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  const userId = crypto.randomUUID();
  const user: User = {
    name: formData.get("name") as string,
    age: age,
    country: formData.get("country") as string,
    interests: [],
  };

  await timeout(2000);

  usersMap.set(userId, user);

  console.log(`New user registered: ${user.name} (ID: ${userId})`);
  console.log(`Total users: ${usersMap.size}`);
}

// Source - https://stackoverflow.com/a/63006702
// Posted by Ronit Roy, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-22, License - CC BY-SA 4.0
function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}
