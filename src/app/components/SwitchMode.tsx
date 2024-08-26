"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        isSelected={theme == "purple-dark"}
        onValueChange={() =>
          setTheme(theme == "purple-dark" ? "light" : "purple-dark")
        }
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      />
      {/* {theme == "purple-dark" ? "dark" : "light"} */}
      {/* </Switch> */}
    </div>
  );
};

export default SwitchMode;
