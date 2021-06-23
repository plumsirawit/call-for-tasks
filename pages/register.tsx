import Head from "next/head";
import styles from "../styles/Register.module.css";
import { useState } from "react";
import { registerUser } from "../util/authentication";

enum RegistrationError {
  PASSWORD_NOT_MATCHED = 1,
  INVITATION_CODE_INVALID = 2,
  USERNAME_INVALID = 4,
  PASSWORD_INVALID = 8,
  DISPLAYNAME_INVALID = 16,
  HTTP_ERROR = 32,
}
/**
 * submits username and password and retrieves errors (empty array if success otherwise array of errors)
 * @todo implementation
 * @param username
 * @param password
 */
async function submitRegister({
  username,
  displayName,
  password,
  confirmPassword,
  invitationCode,
}: {
  username: string;
  displayName: string;
  password: string;
  confirmPassword: string;
  invitationCode: string;
}): Promise<RegistrationError[]> {
  if (password !== confirmPassword) {
    return [RegistrationError.PASSWORD_NOT_MATCHED];
  }
  let { errorCode, status } = await registerUser(
    username,
    password,
    invitationCode,
    displayName
  );
  const errors = [];
  if (status !== 200) {
    errors.push(RegistrationError.HTTP_ERROR);
  }
  if (errorCode % 2 === 1) {
    errors.push(RegistrationError.PASSWORD_NOT_MATCHED);
  }
  errorCode /= 2;
  if (errorCode % 2 === 1) {
    errors.push(RegistrationError.INVITATION_CODE_INVALID);
  }
  errorCode /= 2;
  if (errorCode % 2 === 1) {
    errors.push(RegistrationError.USERNAME_INVALID);
  }
  errorCode /= 2;
  if (errorCode % 2 === 1) {
    errors.push(RegistrationError.PASSWORD_INVALID);
  }
  errorCode /= 2;
  if (errorCode % 2 === 1) {
    errors.push(RegistrationError.DISPLAYNAME_INVALID);
  }
  errorCode /= 2;
  return errors;
}

interface RegisterBoxProps {}
function RegisterBox(props: RegisterBoxProps) {
  const [username, setUsername] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [invitationCode, setInvitationCode] = useState<string>("");
  return (
    <div className={styles.registerBox}>
      <div className={styles.innerRegisterBox}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.registerTextInput}
          placeholder="Username"
          pattern="[a-zA-Z0-9_]*"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.registerTextInput}
          placeholder="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={styles.registerTextInput}
          placeholder="Confirm Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$"
        />
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className={styles.registerTextInput}
          placeholder="Display Name"
          pattern="[a-zA-Z0-9 _][a-zA-Z0-9 _]*[a-zA-Z0-9 _]"
        />
        <input
          type="text"
          value={invitationCode}
          onChange={(e) => setInvitationCode(e.target.value)}
          className={styles.registerTextInput}
          placeholder="Invitation Code"
        />
        <div>
          <div
            className={styles.submitButton}
            onClick={() =>
              submitRegister({
                username,
                displayName,
                password,
                confirmPassword,
                invitationCode,
              })
            }
          >
            <span className={styles.submitButtonText}>Register</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerBoxWrapper}>
        <RegisterBox />
      </div>
    </div>
  );
}
