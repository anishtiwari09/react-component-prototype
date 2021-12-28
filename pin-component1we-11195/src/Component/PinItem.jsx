import React from "react";
const defaultStyle = {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.25rem",
  padding: "0.5rem 0.25rem"
};

const PinItem = React.forwardRef(
  ({ length = 1, handleChange, id, handleBackSpace }, ref) => {
    const handleKeyUp = (e) => {
      switch (e.code) {
        case "Backspace": {
          handleBackSpace && handleBackSpace(e.target.value);

          break;
        }

        case "ShiftLeft":
        case "ShiftRight":
        case "Tab":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowLeft":
        case "ArrowDown":
          break;
        default: {
          handleChange(e.target.value);
          break;
        }
      }
    };
    return (
      <div>
        <input
          ref={ref}
          maxLength={length}
          style={defaultStyle}
          onKeyUp={handleKeyUp}
        />
      </div>
    );
  }
);

export default PinItem;
