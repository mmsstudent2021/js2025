import initialRender from "./inititalRender";
import listener from "./listener";
import setup from "./setup";

export const init = () => {
  console.log("POS is running");

  setup();

  initialRender();

  listener();
};
