import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';





const AddTask = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(task));
        setTask("");
    }

  return (
      <div>
          <h2>Add Task</h2>
          <form onSubmit={handleSubmit}>
              <input type="text" value={task} onChange={handleChange} />
              <button type="submit">Add</button>
          </form>
    </div>
  )
}

export default AddTask