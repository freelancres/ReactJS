import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask } from "../store/taskSlice";

const EditTask = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ taskId, task }));
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

export default EditTask;
