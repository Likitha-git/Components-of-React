import Button from "./Button";

function ButtonDemo() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h2>Button Component</h2>
      <p>This is a reusable button component.</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Button label="Primary Button" onClick={handleClick} />
        <Button
          label="Secondary Button"
          variant="secondary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ButtonDemo;
