import {
  BellRing,
  createIcons,
  Menu,
  Minus,
  Moon,
  Plus,
  RefreshCcw,
  Search,
  Sun,
  Tag,
  User,
  X,
} from "lucide";
import { themeToggleDarkIcon, themeToggleLightIcon } from "./selectors";

const setup = () => {
  iconSetup();
  themeModeSetup();
};

const iconSetup = () => {
  createIcons({
    icons: {
      Menu,
      Sun,
      Moon,
      RefreshCcw,
      BellRing,
      User,
      Search,
      Plus,
      Tag,
      Minus,
      X,
    },
  });
};
const themeModeSetup = () => {
  //   Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
    document.documentElement.classList.remove("dark");
  }
};
export default setup;
