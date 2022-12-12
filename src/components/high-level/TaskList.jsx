import React from 'react';
import Tasks from '../medium-level/Tasks'

const TaskList = (props) => {
    return (
        <div className="task-list-sp">
            <Tasks setDataUpdated={props.setDataUpdated} dataUpdated={props.dataUpdated} />
        </div>
    );
};

export default TaskList;