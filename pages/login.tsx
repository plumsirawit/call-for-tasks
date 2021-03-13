import Head from "next/head";
import styles from "../styles/Login.module.css";
import { useState } from "react";

/**
 * submits username and password and retrieves user object or null if it fails
 * @todo implementation
 * @param username
 * @param password
 */
function submitLogin(username: string, password: string): any {}

interface LoginBoxProps {}
function LoginBox(props: LoginBoxProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={styles.loginBox}>
      <div className={styles.innerLoginBox}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.loginTextInput}
          placeholder="Username"
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
            onClick={() => submitLogin(username, password)}
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
