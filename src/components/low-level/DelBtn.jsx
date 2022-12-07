import React from 'react';

const DelBtn = (props) => {
    return (
        <div className="del-btn-sp">
            <button>{props.children}</button>
        </div>
    );
};

export default DelBtn;