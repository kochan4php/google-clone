import submitHandler from "./submitHandler";

const inputHandler = (e, destination = "") => {
  if (e.key === "Enter") {
    submitHandler(e, destination);
    e.target.blur();
  }
};

export default inputHandler;
