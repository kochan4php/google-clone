import { atom } from "recoil";

const googleTheme = atom({
  key: "googleTheme",
  default: "dark",
});

export { googleTheme };
