import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Call For Tasks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Call For Tasks</h1>

        <p className={styles.description}>Sign in to get started...</p>

        <Link href="/login">
          <div className={styles.loginButton}>
            <span className={styles.loginButtonText}>Sign in</span>
          </div>
        </Link>

        <p className={styles.register}>
          <Link href="/register">Register</Link> (only if you have a
          registration code)
        </p>
      </main>
    </div>
  );
}
