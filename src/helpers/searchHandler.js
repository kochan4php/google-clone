import { userInputState } from "@/store";
import { setRecoil } from "recoil-nexus";

const searchHandler = (e) => {
  setRecoil(userInputState, e.target.value);
  if (e.key === "Enter") e.target.blur();
};

export default searchHandler;
