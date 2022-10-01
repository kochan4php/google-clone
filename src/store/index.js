import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const isDark = atom({
  key: "darkMode",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

const userInputState = atom({
  key: "userInput",
  default: "",
});

const loadingState = atom({
  key: "loading",
  default: true,
});

export { isDark, userInputState, loadingState };
