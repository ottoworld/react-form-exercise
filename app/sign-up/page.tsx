import styles from "./sign-up.module.css";
import { signUp, User } from "@/app/actions";

export default function SignUpPage() {
  const users: User[] = [];

  return (
    <div className={styles.sections}>
      <h2>Sign up page</h2>
      <form className={styles.form} action={signUp}>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-name">Full name</label>
          <input name="name" id="sign-up-name" type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-date">Date of birth</label>
          <input name="dob" type="date" id="sign-up-date" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-country">Country</label>
          <select name="country" id="sign-up-country">
            <option>UK</option>
            <option>USA</option>
          </select>
        </div>
        <div className={styles.formMultiItem}>
          <label htmlFor="sign-up-interests">Interests</label>
          <label className={styles.formCheckbox}>
            <input type="checkbox" value="movies" name="sign-up-interests" />
            Movies
          </label>
          <label className={styles.formCheckbox}>
            <input type="checkbox" value="games" name="sign-up-interests" />
            Games
          </label>
        </div>
        <button>Create account</button>
      </form>
      <h2 className={styles.heading}>User list</h2>
      <div>
        {users.map((user) => {
          return (
            <p key={user.name}>
              User {user.name} is age {user.age}
            </p>
          );
        })}
      </div>
    </div>
  );
}
