import { useState, useCallback } from "react";

export const usePasswordGenerator = (initialLength = 16) => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(initialLength);

  const generatePassword = useCallback(() => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const all = uppercase + lowercase + numbers + special;

    let result = "";
    result += uppercase[Math.floor(Math.random() * uppercase.length)];
    result += lowercase[Math.floor(Math.random() * lowercase.length)];
    result += numbers[Math.floor(Math.random() * numbers.length)];
    result += special[Math.floor(Math.random() * special.length)];

    for (let i = 4; i < length; i++) {
      result += all[Math.floor(Math.random() * all.length)];
    }

    result = result
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    setPassword(result);
  }, [length]);

  return { password, length, setLength, generatePassword };
};
