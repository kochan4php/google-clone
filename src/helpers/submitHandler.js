import { loadingState, userInputState } from "@/store";
import { getHook } from "global-react-hooks";
import { getRecoil, setRecoil } from "recoil-nexus";

const submitHandler = (e) => {
  e.preventDefault();

  const inputValue = getRecoil(userInputState);
  const router = getHook("router");

  if (inputValue.length === 0) return;

  router.push(`/search/${inputValue.split(" ").join("+")}`);
  setRecoil(loadingState, true);
};

export default submitHandler;
