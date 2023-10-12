"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({ children }): React.PropsWidthChildren {
  return <NextThemeProvider>{children}</NextThemeProvider>
}
