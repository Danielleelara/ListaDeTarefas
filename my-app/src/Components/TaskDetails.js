import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';


const TasksDetails = () => {
    const params = useParams();
    console.log(params)
    
    return ( 
        <>
            <div className="back-button-container">
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga quidem sint eius, doloremque voluptatum.
                </p>

            </div>
        </>
    );
}
 
export default TasksDetails;