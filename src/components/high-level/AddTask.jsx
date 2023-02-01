import React, {useState} from 'react';
import Input from '../low-level/Input'
import AddBtn from '../low-level/AddBtn';
import Tags from '../medium-level/Tags'
import {apiCall} from '../../utils/utils'

const AddTask = () => {

    const apiEndpoint = "http://localhost:5000/api/todo/";
    const[entryName, setEntryName] = useState('')
    const[input, setInput] = useState('')
    const [tags, setTags] = useState([])
    

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
        tags : tags
    }
    

    const handleClick = (e)=>{
        e.preventDefault()
        // setTodo(prevState=>{
        //     return [...prevState, {"id": 7, "name": entry}]
        // })
        apiCall().post(apiEndpoint+'addTodos',data)
        .then(response=>{
            console.log(response)
        })
    }


    return (
        <div className="add-wrapper">
            <div className="add-form">
                <form action="" className="frm-sp">
                    <Input entry={entryName} 
                    handleChange={(e) => {setEntryName(e.target.value)}}
                    text="text" 
                    handleKeyDown={null} 
                    placeholder="Add a task to do..."  />

                    <Tags 
                        tags={tags}
                        input = {input}
                        onInputChange = {(e) => {setInput(e.target.value)}}
                        onKeyDown = {onKeyDown}
                        deleteTag = {deleteTag}
                    />
                    <AddBtn handleClick = {(e)=>handleClick(e)}/>
                </form>
            </div>
        </div>
    );
};

export default AddTask;