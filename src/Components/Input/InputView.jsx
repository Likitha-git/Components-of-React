import { useState } from "react";
import Input from "./Input";

function InputView() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Input Component</h2>
      <p>This demonstrates a controlled input component.</p>

      <Input
        label="Your Name"
        value={name}
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <p style={{ marginTop: "12px" }}>
        Current value: <strong>{name}</strong>
      </p>
    </div>
  );
}

export default InputView;
