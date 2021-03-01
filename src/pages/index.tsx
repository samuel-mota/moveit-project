import Link from "next/link";

import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div>
      <img src="/images/Logo-M.svg" alt="Logo M de Move.it" />
      <section>
        <img src="/images/Logo.svg" alt="Logotipo Move.it" />

        <form action="">
          <label htmlFor="userprofile">Usuario github</label>
          <input
            type="text"
            placeholder="escreva seu usuario do github"
            name="userprofile"
            required
          />

          <Link href="Home">
            <button type="submit">Home</button>
          </Link>
        </form>
      </section>
    </div>
  );
}
