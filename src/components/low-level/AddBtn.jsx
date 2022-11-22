import React from 'react';

const AddBtn = (props) => {
    return (
        <div className="add-btn-sp">
            <button onClick={props.handleClick}>Add</button>
        </div>
    );
};

export default AddBtn;