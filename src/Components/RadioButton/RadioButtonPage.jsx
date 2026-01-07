import { useState } from 'react';
import RadioButton from './RadioButton';
import './RadioButton.css';

function RadioButtonPage() {
    const[option, setOption] = useState('');
    const handleChange = (event) => {
        setOption(event.target.value);
    };
        return (
            <div className='container'>
               <h2>Please Select the option</h2>
               <div className='radio-options'>
                <RadioButton value= "Poor" selectedValue={option} onChange={handleChange} /> 
                <RadioButton value= "Average" selectedValue={option} onChange={handleChange} /> 
                <RadioButton value= "Good" selectedValue={option} onChange={handleChange} />  
                <RadioButton value= "Very Good" selectedValue={option} onChange={handleChange} /> 
                <RadioButton value= "Excellent" selectedValue={option} onChange={handleChange} /> 
               </div>
            </div>
        );
}
export default RadioButtonPage;