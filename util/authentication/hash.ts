import { genSaltSync, hashSync } from "bcryptjs";

export const hashPassword = (password: string, salt?: string) => {
  if (salt === undefined) {
    salt = genSaltSync(10);
  }
  const hashedPassword = hashSync(password, salt);
  return { salt, hashedPassword };
};
