import React from 'react';
import AddTask from '../components/high-level/AddTask';
import TaskList from '../components/high-level/TaskList'
const Home = () => {
    return (
        <div className="main-content">
            <div className="container">
                <div className="add-task-sp">
                    <AddTask/>
                </div>
                <div className="tasks-list-sp">
                    <TaskList/>
                </div>
            </div>
        </div>
    );
};

export default Home;