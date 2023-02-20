import React, {useState} from 'react';
import Input from '../low-level/Input'
import AddBtn from '../low-level/AddBtn';
import Tags from '../medium-level/Tags'
import {apiCall} from '../../utils/utils'
import { styleErrors } from '../../utils/utils';

export const ErrorsContext = React.createContext()

const AddTask = () => {
    
    const apiEndpoint = process.env.NODE_ENV==='production' ? process.env.REACT_APP_API_URL+"/api/todo/" : "http://localhost:8888/api/todo/";
    const[entryName, setEntryName] = useState('')
    const[input, setInput] = useState('')
    const [tags, setTags] = useState([])
    const [errors, setErrors] = useState({})
    let errorsI = {}
    

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
    const data = {
        text: entryName,
        tags : tags
    }

    /**
     * delete a tag 
     * @param {*} e default event parameter
     * @param {*} index index of tag in array
     */
    const deleteTag = (e,index) =>{
        e.preventDefault()
        setTags(prevState=> prevState.filter((tag, i)=> i !== index))
    } 
   

    /**
     * Fuction that is perform when form is submitted
     * @param {*} e event
     */
    function formSubmited(e){
        e.preventDefault()
        

        if(!data.text){
            errorsI.text="Please enter a text"
        }
        if(data.tags.length===0){
            errorsI.tags = "Please enter a tag"
        }
        console.log(errorsI)
        setErrors(errorsI)
        
        if(Object.keys(errorsI).length === 0){
            apiCall(apiEndpoint+'addTodos').post(data)
                .then(response=>{
                    console.log(response)
                })

                setEntryName('')
                setInput('')
                setTags([])
        }

    console.log(errors)        
    }

    return (
        <ErrorsContext.Provider value={{errors}}>
            <div className="add-wrapper">
                <div className="add-form">
                    <form onSubmit={formSubmited} className="frm-sp">
                        <Input 
                        entry={entryName}
                        onChange = {(e)=>{
                            errors.text="" 
                            setEntryName(e.target.value)}}
                        name="task"
                        text="text" 
                        handleKeyDown={null} 
                        placeholder="Add a task to do..."  />
                         {errors.text? 
                            <p style={styleErrors}>{errors.text}</p>
                          : ""}
                        <Tags 
                            entry={input}
                            tags={tags}
                            input = {input}
                            onChange = {(e)=>{
                                errors.tags=""
                                setInput(e.target.value)}}
                            onKeyDown = {onKeyDown}
                            deleteTag = {deleteTag}
                        />
                        {errors.tags? 
                            <p style={styleErrors}>{errors.tags}</p>
                          : ""}
                        <AddBtn />
                    </form>
                </div>
            </div>
        </ErrorsContext.Provider>
    );
};

export default AddTask;