import React, {useState, useEffect} from 'react';
import DelBtn from '../low-level/DelBtn';
import {getData} from '../../utils/utils'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Tasks = () => {

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
         
        getData('http://localhost:5000/api/todo/getTodos', (res) =>{
            setItems(res.data)
            console.log(1)
        })

    },[])

    return (
        <div className="task-sp">
            {
                items.map((value, index, array) => {
                    return(
                        <div key={index} className="task-info">
                            <div className="task-txt">
                                <p>{value.text}</p>
                            </div>
                            <div className="btns-sp">
                                <span>
                                    {value.is_complete? <AiOutlineCheck/> : ''}
                                </span>
                                <span>
                                    <DelBtn><AiOutlineClose/></DelBtn>
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