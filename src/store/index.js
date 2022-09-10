import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const isDark = atom({
  key: "darkMode",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export { isDark };
