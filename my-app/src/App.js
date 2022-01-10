import React, { useState } from "react";
import './App.css';
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";
import {v4 as uuidv4} from 'uuid';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";



const App = () => {
  const [tasks, setTasks] = useState([
      { 
        id: '1',
        title: "Estudar Programação",
        completed: 'false'
      },
      { 
        id: '2',
        title: "Ler Livros",
        completed: 'true'
      }
  ]);
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId)return {...task, completed: !task.completed }

      return task;
    })
    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) =>{
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    setTasks(newTasks);
  }
  const handleTaskDeletion = (taskId) =>{
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }
  
  return (
      <Router>
        <div className='container'>
          <Header/>
          {/* <Route /> */}
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks 
                  tasks={tasks} 
                  handleTaskClick={handleTaskClick} 
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>        
        </div>
      </Router>
  )
}

export default App;
