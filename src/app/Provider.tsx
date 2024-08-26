import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvoderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProvoderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider themes={['light', 'dark', 'purple-dark']} attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
