import { handleTheme } from "./handler";
import { themeToggleBtn } from "./selectors";

const listener = () => {
    themeToggleBtn.addEventListener("click", handleTheme);
};

export default listener;
