"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProv({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
