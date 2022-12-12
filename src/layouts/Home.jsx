import React, {useState} from 'react';
import AddTask from '../components/high-level/AddTask';
import TaskList from '../components/high-level/TaskList'
const Home = () => {

    const [dataUpdated, setDataUpdated] = useState(true)

    return (
        <div className="main-content">
            <div className="container">
                <div className="add-task-sp">
                    <AddTask  setDataUpdated={setDataUpdated} dataUpdated={dataUpdated}/>
                </div>
                <div className="tasks-list-sp">
                    <TaskList setDataUpdated={setDataUpdated} dataUpdated={dataUpdated}/>
                </div>
            </div>
        </div>
    );
};

export default Home;