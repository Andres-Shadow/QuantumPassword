import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export const PasswordDisplay = ({ password }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="bg-gray-100 p-4 rounded-lg cursor-pointer flex items-center justify-between"
      onClick={copyToClipboard}
    >
      <span className="font-mono text-lg">{password}</span>
      {copied ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <Copy className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );
};
