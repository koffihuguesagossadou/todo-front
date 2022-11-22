import React from 'react';

const Input = (props) => {
    return (
        <div className="input-sp">
            <input value={props.entry} onChange={props.handleChange} type={props.text} placeholder={props.placeholder} />
        </div>
    );
};

export default Input;