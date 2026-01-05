import { useState } from "react";
import Toggle from "./Toggle";

function ToggleView() {
  const [enabled, setEnabled] = useState(false);

  function handleToggle() {
    setEnabled(prev => !prev);
  }

  return (
    <div>
      <h2>Toggle Component</h2>
      <p>This demonstrates a controlled toggle switch.</p>

      <Toggle
        label="Enable Notifications"
        checked={enabled}
        onChange={handleToggle}
      />

      <p style={{ marginTop: "12px" }}>
        Status: <strong>{enabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}

export default ToggleView;
