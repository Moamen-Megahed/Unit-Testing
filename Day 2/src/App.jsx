import React from "react";
import Button from "./components/Button/Button";

export default function App() {
  const handleClick = () => {
    console.log("See ? i can test it from consolllleee");
  };
  return (
    <div>
      <Button label={"Moamen"} onClick={handleClick} />
    </div>
  );
}
