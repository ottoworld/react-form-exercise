import styles from "./users-list.module.css";
import Link from "next/link";
import PageTitleComponent from "@/components/page-title/page-title";
import { getUsers } from "@/app/actions";

const users = await getUsers();

export default async function UsersListComponent() {
  return (
    <div className={styles.users}>
      <PageTitleComponent>Find users</PageTitleComponent>
      {users.map((user) => (
        <Link className={styles.link} key={user.id} href={`/user/${user.id}`}>
          {" "}
          {user.name}
        </Link>
      ))}
    </div>
  );
}
