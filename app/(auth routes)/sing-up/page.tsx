'use client'
import { register, RegisterRequest } from "@/lib/api/clientApi"
import css from "./SingUpPage.module.css"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);



  const handleSubmit = async (formData: FormData) => {
    try {
      const regData = Object.fromEntries(formData) as RegisterRequest;
      const res = await register(regData);
      if (res.email) {
        router.push("/profile");
      }
      else if (res.message) {
        setError(res.message)
      }
  else {setError("Invalid email or password")}
    }
    catch {
      setError("Invalid email or password")
    }
  }


    return (<main className={css.mainContent}>
      <form className={css.form} action={handleSubmit}>
      <h1 className={css.formTitle}>Sign up</h1>
        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" className={css.input} required />
        </div>
    
        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" className={css.input} required />
        </div>
    
        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>
        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
      )
}