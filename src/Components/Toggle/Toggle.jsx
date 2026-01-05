import "./toggle.css";

function Toggle({ label, checked, onChange }) {
  return (
    <label className="toggle-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="toggle-slider"></span>
      <span className="toggle-label">{label}</span>
    </label>
  );
}

export default Toggle;
