import React, {useState} from 'react';
import Input from '../low-level/Input'
import AddBtn from '../low-level/AddBtn';
import Tags from '../medium-level/Tags'
import {sendData} from '../../utils/utils'

const AddTask = () => {

    const[entryName, setEntryName] = useState('')
    const[input, setInput] = useState('')
    const [tags, setTags] = useState([])

    const handleChangeNameInput = (e) => {
        setEntryName(e.target.value)
    }

    const onInputTagsChange = (e) => {
        setInput(e.target.value)
        
    }
    

    /**
     * add a tag when Enter bouton is press
     * @param {*} e 
     */
    const onKeyDown = (e) => {
        const {key} = e

        if(key === 'Enter' && !tags.includes(input))
        {
            e.preventDefault()
            setTags(prevState=>[...prevState, input])
            setInput('')
        }
        
    }


    /*********************** */


    /**
     * delete a tag 
     * @param {*} e default event parameter
     * @param {*} index index of tag in array
     */
    const deleteTag = (e,index) =>{
        e.preventDefault()
        setTags(prevState=> prevState.filter((tag, i)=> i !== index))
    } 
    
    

    const data = {
        text: entryName,
        Tags : tags
    }

       
    /**
     * add data to database when button is clicked
     * @param {*} e default event parameter
     */
    const handleClick = (e)=>{
        e.preventDefault()
        // setTodo(prevState=>{
        //     return [...prevState, {"id": 7, "name": entry}]
        // })

        console.log(data)

        sendData('http://localhost:5000/api/todo/addTodos', data, (response)=>{
            console.log(response)
        })
    }


    console.log(entryName)
    return (
        <div className="container">
            <form action="" className="frm-sp">
                <Input entry={entryName} handleChange={handleChangeNameInput}text="text" handleKeyDown={null} placeholder="name"  />
                <Tags 
                    tags={tags}
                    input = {input}
                    onInputChange = {onInputTagsChange}
                    onKeyDown = {onKeyDown}
                    deleteTag = {deleteTag}
                />
                <AddBtn handleClick = {(e)=>handleClick(e)}/>
            </form>
        </div>
    );
};

export default AddTask;