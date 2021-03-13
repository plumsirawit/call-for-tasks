import axios from "axios";

/**
 * Puts data of a user that is to be registered
 * @param username
 * @param hashedPassword
 * @param salt
 * @param registerCode
 */
export function putRegisterUser(
  username: string,
  hashedPassword: string,
  salt: string,
  registerCode: string
) {
  return axios.put("/api/user/register", {
    username,
    hashedPassword,
    salt,
    registerCode,
  });
}
