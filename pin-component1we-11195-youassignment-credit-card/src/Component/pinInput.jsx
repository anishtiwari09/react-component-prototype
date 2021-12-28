import { useRef, useState } from "react";
import PinItem from "./PinItem";

export default function PinInput({ noOfBoxes = 5, length = 4, onChange }) {
  const ref = useRef([]);
  //console.log(ref.current[0]);
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));
  const handleChange = (val, index) => {
    values[index] = val;
    setValues([...values]);
    if (val.length === length && index < noOfBoxes - 1)
      ref.current[index + 1].focus();
    //console.log("claos");
    onChange(values.join(""));

    //console.log(ref.current, "ref");
  };
  const handleBackSpace = (val, index) => {
    // console.log("calling");
    let temp = values[index];
    values[index] = val;

    //  console.log(index);
    if (index > 0 && temp.length === 0) {
      ref.current[index - 1].focus();
    }
    console.log("keyup");
    setValues([...values]);
    onChange(values.join(""));
  };
  const arr = new Array(noOfBoxes).fill(0);
  //console.log(arr);

  // const handlePaste = (e) => {
  //   e.preventDefault();
  //   let pasteData = e.clipboardData
  //     .getData("text")
  //     .split("")
  //     .filter((a, i) => i < length * noOfBoxes);
  //   pasteData.forEach((val, i) => {
  //     values[i] = val;
  //     let temp = ref.current[i].value;
  //     console.log(Date.now(), temp);
  //     ref.current[i].value = val;
  //     if (i < noOfBoxes - 1) ref.current[i + 1].focus();
  //   });
  //   onChange(values.join(""));
  //   setValues([...values]);
  // };
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {arr.map((_, i) => (
        <PinItem
          ref={(el) => (ref.current[i] = el)}
          key={i}
          id={i}
          length={length}
          handleChange={(v) => {
            // console.log(v, Date.now(), i);
            handleChange(v, i);
          }}
          handleBackSpace={(v) => handleBackSpace(v, i)}
        />
      ))}
    </div>
  );
}
