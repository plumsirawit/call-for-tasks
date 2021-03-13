import { hashSync, genSaltSync } from "bcrypt";
import { putRegisterUser } from "../../api";

/**
 * Performs user registration, returns status and message
 * @param username
 * @param password
 * @param registerCode
 */
export async function registerUser(
  username: string,
  password: string,
  registerCode: string
) {
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);
  const result = await putRegisterUser(
    username,
    hashedPassword,
    salt,
    registerCode
  );
  return {
    status: result.status,
    ...(result.data.message && { message: result.data.message }),
  };
}
