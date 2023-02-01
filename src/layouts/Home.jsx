import React from 'react';
import AddTask from '../components/high-level/AddTask';
import TaskList from '../components/high-level/TaskList'
const Home = () => {


    return (
        <div className="home">
            <div className="container">
                <div className="main-content">
                    <div className="todo-wrp">
                        <AddTask/>
                        <TaskList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;