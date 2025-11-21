"use client";

import styles from "./sign-up.module.css";
import { FormEvent, useState } from "react";

export default function SignUpPage() {
  //Mock user data instead of a call + db
  const [users, setUsers] = useState<
    Array<{
      name: string;
      age: number;
      country: string;
      interests: string[];
    }>
  >([{ name: "Otto", age: 27, country: "UK", interests: ["Games"] }]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    const dob = new Date(formData.get("dob") as string);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    users.push({
      name: formData.get("event") as string,
      age: age,
      country: formData.get("country") as string,
      interests: [],
    });
  };

  return (
    <div className={styles.sections}>
      <h2>Sign up page</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button type="button">Create account</button>
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
