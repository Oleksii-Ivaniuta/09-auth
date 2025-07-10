'use client'
import { logout } from "@/lib/api/clientApi";
import css from "./AuthNavigation.module.css"


export default function AuthNavigation() {
  return (
    <>
      <li className={css.navigationItem}>
        <a href="/profile"  className={css.navigationLink}>
          Profile
        </a>
      </li>

      <li className={css.navigationItem}>
        <p className={css.userEmail}>User email</p>
        <button className={css.logoutButton} onClick={logout}>Logout</button>
      </li>

      <li className={css.navigationItem}>
        <a href="/sing-in" className={css.navigationLink}>
          Login
        </a>
      </li>

      <li className={css.navigationItem}>
        <a href="/sing-up" className={css.navigationLink}>
          Sign up
        </a>
      </li>
    </>
  );
}
