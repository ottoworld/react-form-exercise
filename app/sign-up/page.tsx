import styles from "./sign-up.module.css";

export default function SignUpPage() {
  return (
    <div>
      <h2 className={styles.heading}>Sign up page</h2>
      <form className={styles.form}>
        <div className={styles.formItem}>
          <label htmlFor="name">Full name</label>
          <input name="name" type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="dob">Date of birth</label>
          <input name="dob" type="date" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="country">Country</label>
          <select name="country">
            <option>UK</option>
            <option>USA</option>
          </select>
        </div>
        <div className={styles.formMultiItem}>
          <label htmlFor="interests">Interests</label>
          <div className={styles.formCheckbox}>
            <input type="checkbox" value="movies" name="interests-movies" />
            <label htmlFor="interests-movies">Movies</label>
          </div>
          <div className={styles.formCheckbox}>
            <input type="checkbox" value="games" name="interests-games" />
            <label htmlFor="interests-games">Games</label>
          </div>
        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
