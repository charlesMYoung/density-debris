import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities";
import { getRandomColor } from "~/common/time-color";

const getIsDark = () => {
  const storedTheme = window.localStorage.getItem("theme") ?? '"auto"';
  let presetTheme = "light";
  if (storedTheme === "auto") {
    presetTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else {
    presetTheme = storedTheme;
  }
  return presetTheme === "dark";
};

export const initTheme = () => {
  const color = getRandomColor();
  const theme = themeFromSourceColor(argbFromHex(color), []);
  const isDark = getIsDark();
  // Check if the user has dark mode turned on
  applyTheme(theme, { target: document.body, dark: isDark });
  switchIconStyle(isDark);
};

export const registerClick = () => {
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".mooon");
  if (sun) {
    sun.addEventListener("click", () => {
      localStorage.setItem("theme", "light");
      initTheme();
    });
  }

  if (moon) {
    moon.addEventListener("click", () => {
      localStorage.setItem("theme", "dark");
      initTheme();
    });
  }
};

export const switchIconStyle = (isDark: boolean) => {
  const sun = document.querySelector(".sun") as HTMLElement;
  const moon = document.querySelector(".mooon") as HTMLElement;
  if (sun || moon) {
    if (!isDark) {
      sun.style.display = "none";
      moon.style.display = "block";
    } else {
      sun.style.display = "block";
      moon.style.display = "none";
    }
  }
};
