import React from 'react';
import Input from '../low-level/Input'
import { AiOutlineClose } from "react-icons/ai";

const Tags = (props) => {
    let {tags} = props

    return (
        <div className="tags-sp">
            {
              tags.map((value, index, array) => {
                    return (
                        <div key={index}> 
                            {value}
                            <button onClick={(e)=>props.deleteTag(e, index)}><AiOutlineClose/></button>
                        </div>
                    )
                })
            }
            <Input 
                entry={props.input} 
                handleChange={props.onInputChange}
                handleKeyDown={props.onKeyDown} />
        </div>
    );
};

export default Tags;