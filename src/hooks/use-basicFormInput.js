import { useReducer } from "react";

const initialReducerValues = {
  value: "",
  isTouch: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }

  if (action.type === "BLUR") {
    return { value: state.value, isTouch: true };
  }

  if (action.type === "RESET") {
    return { value: "", isTouch: false };
  }

  return initialReducerValues;
};

const UseBasicFromInput = (validFunc) => {
  // const [value, setValue] = useState("");
  // const [isTouch, setIsTouch] = useState(false);

  const [inputState, dispatch] = useReducer(inputReducer, initialReducerValues);

  const valueValidation = validFunc(inputState.value);
  const checkValidation = !valueValidation && inputState.isTouch;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurChangeHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueValidation,
    checkValidation,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default UseBasicFromInput;
