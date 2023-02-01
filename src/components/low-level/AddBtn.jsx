import React from 'react';
import { BsPlusLg } from "react-icons/bs";

const AddBtn = (props) => {
    return (
        <div className="add-btn-sp">
            <button onClick={props.handleClick}><span><BsPlusLg/></span></button>
        </div>
    );
};

export default AddBtn;