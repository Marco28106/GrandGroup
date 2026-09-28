"use client";
import { createContext, useContext, useEffect, useState } from "react";
type Theme = "light" | "dark";
const Ctx = createContext<{ theme: Theme; toggle: () => void } | null>(null);
export function useTheme() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme outside provider");
  return v;
}
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (sysDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}
