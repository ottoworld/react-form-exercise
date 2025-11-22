import styles from "./users-list.module.css";

export default function UsersListComponent() {
  return (
    <div>
      <h1>All users</h1>
      <ul className={styles.list}>
        <li>User 1</li>
      </ul>
    </div>
  );
}
