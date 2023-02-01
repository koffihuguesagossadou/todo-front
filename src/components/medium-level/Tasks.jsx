import React, {useState, useEffect} from 'react';
import {deleteData, apiCall} from '../../utils/utils'
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrash, FaPen } from "react-icons/fa"
const Tasks = () => {

    const apiEndpoint = "http://localhost:5000/api/todo/";
    const [items, setItems] = useState([])

    

    useEffect(() =>{

        
        if(items.length === 0){
            /* A custom function that I created to fetch data from the server. */
            apiCall().get(apiEndpoint+'getTodos')
                .then(response=>{
                    const data = response.data.data
                    setItems(Object.entries(data))
                })
        }

    },[items])

    /**
     * 
     * @param {int} index index of task to delete
     */
    const deleteTask = (e,index)=>{
        e.preventDefault();
        deleteData(apiEndpoint+'deleteTodo/'+index, (res)=>{
            console.log(res)
        })
        
    }

    return (
        <div className="task-sp">
            {
                /** display receive data from api */
                items.map((value, index) => {
                    return(
                        <div key={value[0]} className="task-info">
                            <div className="task-txt">
                                <div className="task-title">
                                    <h3>{value[1].todoName}</h3>
                                </div>
                                <div className="task-tags">
                                   
                                    {
                                        Object.entries(value[1].tags).map((value, index)=>{
                                            return <span key={index+ Date.now()}>{value[1]}</span>
                                        })
                                    }
                                   
                                </div>
                            </div>
                            <div className="btns-sp">
 
                                {
                                    value[1].is_complete? 
                                    <span className="is-complete"><AiOutlineCheck/></span> : 
                                    <>
                                        <span className="edit">
                                            <button onClick={(e)=>deleteTask(e, index)}><FaPen/></button>
                                        </span>
                                        <span className="del">
                                            <button onClick={(e)=>deleteTask(e, index)}><FaTrash/></button>
                                        </span>
                                    </>
                                }
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Tasks;