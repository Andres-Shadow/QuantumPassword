import React, { useEffect } from "react";
import { PasswordDisplay } from "./PasswordDisplay";
import { PasswordControls } from "./PasswordControls";
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";

export const PasswordGenerator = () => {
  const { password, length, setLength, generatePassword } =
    usePasswordGenerator();

  useEffect(() => {
    generatePassword();
  }, [length, generatePassword]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <PasswordDisplay password={password} />
      <PasswordControls
        length={length}
        setLength={setLength}
        onGenerate={generatePassword}
      />
    </div>
  );
};
