"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function InputForm() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <div>Hello this is the inputform</div>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Button
        size="lg"
        radius="full"
        color="primary"
        variant="shadow"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Click me
      </Button>
    </div>
  );
}
