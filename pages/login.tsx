import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useState } from "react";

/**
 * submits email and password and retrieves user object or null if it fails
 * @todo implementation
 * @param email
 * @param password
 */
function submitLogin(email: string, password: string): any {}

interface LoginBoxProps {}
function LoginBox(props: LoginBoxProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles.loginBox}>
      <div className={styles.innerLoginBox}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.loginTextInput}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.loginTextInput}
          placeholder="Password"
        />
        <div>
          <div
            className={styles.submitButton}
            onClick={() => submitLogin(email, password)}
          >
            <span className={styles.submitButtonText}>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginBoxWrapper}>
        <LoginBox />
      </div>
    </div>
  );
}
