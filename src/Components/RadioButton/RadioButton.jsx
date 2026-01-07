import React from "react";

function RadioButton({ value, selectedValue, onChange }) {
    return(
        <label className="radio-item">
            <input type="radio"
            value = {value}
            checked= {selectedValue === value} 
            onChange={onChange}
            />
            {value}
        </label>
    ) ;   
}
export default RadioButton;