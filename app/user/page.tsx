import { getUsers } from "@/app/actions";
import Link from "next/link";

export default function UserPage() {
  return (
    <div>
      {getUsers().then((users) => {
        return users.map((user) => {
          return (
            <Link key={user.id} href={`/users/${user.id}`}>
              User {user.name} is age {user.age}
            </Link>
          );
        });
      })}
    </div>
  );
}
