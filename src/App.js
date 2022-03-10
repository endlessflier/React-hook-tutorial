import { useState, useRef, useReducer } from "react";
import CallBackTutorial from "./CallbackTutorial";
import MemoTutorial from "./MemoTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import EffectTutorial from "./EffectTutorial";
import LayoutEffectTutorial from "./LayoutEffectTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import "./styles.css";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}
const showTextList = [
  "StateTutorial",
  "RefTutorial",
  "MemoTutorial",
  "CallBackTutorial",
  "ContextTutorial",
  "EffectTutorial",
  "LayoutEffectTutorial",
  "UseImperativeTutorial"
];

const tutorialComponentArray = [
  <StateTutorial />,
  <RefTutorial />,
  <MemoTutorial />,
  <CallBackTutorial />,
  <ContextTutorial />,
  <EffectTutorial />,
  <LayoutEffectTutorial />,
  <ImperativeHandle />
];
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: (state.count + 1) % showTextList.length,
        showText: state.showText
      };
    case "toggleShowText":
      return { count: state.count, showText: showTextList[state.count] };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: showTextList[0]
  });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      <p>This is a {state.showText}</p>
      {tutorialComponentArray[state.count]}
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ReducerTutorial />
    </div>
  );
}
