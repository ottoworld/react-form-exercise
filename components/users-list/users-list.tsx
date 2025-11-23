import styles from "./users-list.module.css";
import Link from "next/link";
import PageTitleComponent from "@/components/page-title/page-title";
import { getUsers } from "@/app/actions";

const users = await getUsers();

export default async function UsersListComponent() {
  return (
    <div>
      <PageTitleComponent>Find users</PageTitleComponent>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
