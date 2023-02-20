import React from 'react';
const Input = (props) => {


    return (
        <>
            <div className="input-sp">
                <input 
                    value={props.entry}
                    name={props.name}
                    onChange = {props.onChange}
                    onKeyDown = {props.handleKeyDown}
                    type={props.text} 
                    placeholder={props.placeholder} />
            </div>
        </>
        
    );
};

export default Input;