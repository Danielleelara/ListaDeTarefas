import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return (
        <>
            { tasks.map((task) => 
                    <Task 
                        onClick = {handleTaskClick} 
                        handleTaskDeletion = {handleTaskDeletion}
                        task={task}
                    />
                )
            }
        </>

    )
};

export default Tasks