import React, {useState} from 'react';
import Input from '../low-level/Input'
import AddBtn from '../low-level/AddBtn';
const AddTask = () => {

    const[entry, setEntry] = useState('')

    const handleChange = (e) => {
        setEntry(e.target.value)
    }
        
    const handleClick = (e)=>{
        e.preventDefault()
        alert(entry)
    }
    console.log(entry)
    return (
        <div className="container">
            <form action="" className="frm-sp">
                <Input entry={entry} handleChange={handleChange}text="text" placeholder="name"  />
                <AddBtn handleClick = {(e)=>handleClick(e)}/>
            </form>
        </div>
    );
};

export default AddTask;