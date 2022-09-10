import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const googleTheme = atom({
  key: "23456789o9pkdmaoidjiam",
  default: "dark",
  effects_UNSTABLE: [persistAtom],
});

export { googleTheme };
