import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
}
  from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"; 
  

function Home() {
  return (
    <div>
      <h2>Welcome to Housekeeping App</h2>
      <p>Click on the links to navigate</p>
    </div>
  )
}

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <Link className="nav-link" to={`/edit-task/${index}`}>
              Edit Task
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

function EditTask({ editTask }) {
  const { taskId } = useParams();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // update task logic
    editTask(taskId, task);

    setTask("");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const editTask = (taskId, task) => {
    
    setTasks(
      (prevTasks) => {
        const updatedTasks = [...prevTasks];
        updatedTasks.splice(taskId, 1, task);
        return updatedTasks;
      }
    )

   
  };

 return (
   <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <Link className="navbar-brand" to="/">
           Housekeeping Application
         </Link>
         <ul className="navbar-nav">
           <li className="nav-item">
             <Link className="nav-link" to="/">
               Home
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/tasks">
               Task List
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/add-task">
               Add Task
             </Link>
           </li>
         </ul>
       </div>
     </nav>
     <div className="container mt-4">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/tasks" element={<TaskList tasks={tasks} />} />
         <Route path="/add-task" element={<AddTask addTask={addTask} />} />
         <Route path="/edit-task/:taskId" element={<EditTask editTask={editTask} />} />
       </Routes>
     </div>
   </Router>
 );
  
}

export default App;