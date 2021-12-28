import { useState } from "react";
import PinInput from "./Component/pinInput";

import "./styles.css";

export default function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <h1>Credit Card Pin</h1>
      <PinInput onChange={(val) => setState(val)} />
      <hr />
      <div>{state}</div>
    </div>
  );
}
