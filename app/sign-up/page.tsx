import styles from "./sign-up.module.css";
import { getCountries, getInterests, signUpForm } from "@/app/actions";
import PageTitleComponent from "@/components/page-title/page-title";
import SubmitButtonComponent from "@/components/submit-button/submit-button";

export default async function SignUpPage() {
  const interests = await getInterests();
  const countries = await getCountries();
  return (
    <>
      <PageTitleComponent>Sign up page</PageTitleComponent>
      <form className={styles.form} action={signUpForm}>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-name">Full name</label>
          <input name="name" id="sign-up-name" type="text" required />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-date">Date of birth</label>
          <input name="dob" type="date" id="sign-up-date" required />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="sign-up-country">Country</label>
          <select name="country" id="sign-up-country" required>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <fieldset className={styles.fieldset} aria-required="true">
          <legend>Interests</legend>
          {interests.map((interest, index) => (
            <label key={index} className={styles.formCheckbox}>
              <input type="checkbox" value={interest} />
              {interest}
            </label>
          ))}
        </fieldset>
        <SubmitButtonComponent pendingText="Creating account...">
          Create account
        </SubmitButtonComponent>
        <div>{}</div>
      </form>
    </>
  );
}
