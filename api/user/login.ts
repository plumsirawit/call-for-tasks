import axios from "axios";

/**
 * Get the user logged in
 * @param username
 * @param password
 */
export function postLoginUser(username: string, password: string) {
  // Caution! This sends the user password directly.
  // SSL is required for security.
  return axios.post("/api/user/login", {
    username,
    password,
  });
}
