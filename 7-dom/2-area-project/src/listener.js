import { handleCalcBtn, handleClearBtn, handleStoreBtn } from "./handlers";
import { calcBtn, clearBtn, storeBtn } from "./selectors";

const listener = () => {
  calcBtn.addEventListener("click", handleCalcBtn);
  storeBtn.addEventListener("click", handleStoreBtn);
  clearBtn.addEventListener("click", handleClearBtn);
};

export default listener;
