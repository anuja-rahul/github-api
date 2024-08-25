import { NextUIProvider } from "@nextui-org/react";

interface ProvoderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProvoderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
