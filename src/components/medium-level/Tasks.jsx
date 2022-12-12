import React, {useState, useEffect} from 'react';
import {getData, deleteData} from '../../utils/utils'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Tasks = (props) => {

    const apiEndpoint = "http://localhost:5000/api/todo/";
    const {dataUpdated, setDataUpdated} = props
    const [items, setItems] = useState([])

    // fetch data with Axios
    // const getTodos = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:5000/api/todo/getTodos')
    //         setItems(res.data)
    //     } catch (error) {
            
    //     }
    // }
    
    // fetch data with fetch API
    // const fetchData = () =>{
    //     const options = {
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }

    //     /** fetching data from json file */
    //     fetch('http://localhost:5000/api/todo/getTodos', options)
    //     .then(response => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw response;
    //     })
    //     .then(data => {
    //         setItems(data)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }

    useEffect(() =>{
        console.log(dataUpdated)

        if(dataUpdated){
            /* A custom function that I created to fetch data from the server. */
            getData(apiEndpoint+'getTodos', (res) =>{
                setItems(res.data)
            })
            
            setDataUpdated(false)
        }


    }, [dataUpdated, setDataUpdated])



    /**
     * 
     * @param {int} index index of task to delete
     */
    const deleteTask = (e,index)=>{
        e.preventDefault();
        deleteData(apiEndpoint+'deleteTodo/'+index, (res)=>{
            console.log(res)
        })
        setDataUpdated(true)
    }

    return (
        <div className="task-sp">
            {
                /** display receive data from api */
                items.map((value, index, array) => {
                    return(
                        <div key={index} className="task-info">
                            <div className="task-txt">
                                <p>{value !==null ? value.text: ""}</p>
                            </div>
                            <div className="btns-sp">
                                <span>
                                    {value.is_complete? <AiOutlineCheck/> : ''}
                                </span>
                                <span>
                                    <button onClick={(e)=>deleteTask(e, index)}><AiOutlineClose/></button>
                                </span>
                            </div>
                        </div>
                    )
                })
            
            }
        </div>
    );
};

export default Tasks;