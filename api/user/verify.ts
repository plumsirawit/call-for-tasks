import axios from "axios";

/**
 * Verify the registration code
 * @param registerCode
 */
export function verifyRegistrationCode(registerCode: string) {
  return axios.post("/api/user/verify", {
    registerCode,
  });
}
