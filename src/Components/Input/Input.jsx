import "./input.css";

function Input({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}

      <input
        className="input-field"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
