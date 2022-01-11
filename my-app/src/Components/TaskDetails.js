import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css';


const TasksDetails = () => {
    const params = useParams();
    const history = useHistory();

    const hadleBackButtonClick = () =>{
        history.goBack();

    }
    
    return ( 
        <>
            <div className="back-button-container">
                <Button onClick = {hadleBackButtonClick}>Voltar</Button>
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