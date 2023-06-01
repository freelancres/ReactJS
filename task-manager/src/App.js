import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/actions';

const App = () => {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      const task = { id: Date.now(), title: taskName };
      dispatch(addTask(task));
  }
}

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e)=>setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}{' '}
            <button onClick={()=> handleDeleteTask(task.id)} >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;