import React from "react";
import { RefreshCw } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const PasswordControls = ({ length, setLength, onGenerate }) => (
  <div className="mt-6 space-y-4">
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">Length: {length}</span>
      <div className="flex-1">
        <Slider
          value={[length]}
          onValueChange={(value) => setLength(value[0])}
          min={8}
          max={32}
          step={1}
          className="w-full"
        />
      </div>
    </div>

    <Button
      onClick={onGenerate}
      className="w-full flex items-center justify-center gap-2"
    >
      <RefreshCw className="h-4 w-4" />
      Generate New Password
    </Button>
  </div>
);
