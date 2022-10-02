import { loadingState, userInputState } from "@/store";
import { getHook } from "global-react-hooks";
import { getRecoil, setRecoil } from "recoil-nexus";

const submitHandler = (e, destination = "") => {
  e.preventDefault();

  const inputValue = getRecoil(userInputState);
  const router = getHook("router");

  if (inputValue.length === 0) return;

  router.push(`/search/${inputValue.split(" ").join("+")}/${destination}`);
  setRecoil(loadingState, true);
};

export default submitHandler;
