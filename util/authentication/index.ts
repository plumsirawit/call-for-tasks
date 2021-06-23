import { putRegisterUser } from "../../api";
import { postLoginUser } from "../../api/user/login";
import { hashPassword } from "./hash";

/**
 * Performs user registration, returns status and message
 * @param username
 * @param password
 * @param registerCode
 */
export async function registerUser(
  username: string,
  password: string,
  registerCode: string,
  displayName: string
) {
  const { salt, hashedPassword } = hashPassword(password);
  const result = await putRegisterUser({
    username,
    hashedPassword,
    salt,
    registerCode,
    displayName,
  });
  return {
    status: result.status,
    ...result.data,
  };
}

export async function login(username: string, password: string) {
  const result = await postLoginUser(username, password);
  if (result.status !== 200) {
    return null;
  }
}
