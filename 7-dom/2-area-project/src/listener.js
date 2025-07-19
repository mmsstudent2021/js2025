import {
  handleCalcBtn,
  handleClearBtn,
  handleLists,
  handleStoreBtn,
} from "./handlers";
import { calcBtn, clearBtn, lists, storeBtn } from "./selectors";

const listener = () => {
  calcBtn.addEventListener("click", handleCalcBtn);
  storeBtn.addEventListener("click", handleStoreBtn);
  clearBtn.addEventListener("click", handleClearBtn);
  lists.addEventListener("click", handleLists);
};

export default listener;
