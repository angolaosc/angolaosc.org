"use client";

import { ThemeProvider } from "next-themes";

export default function ProviderTheme({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <ThemeProvider>{children}</ThemeProvider>
  }