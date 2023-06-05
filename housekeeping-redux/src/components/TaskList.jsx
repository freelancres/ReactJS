import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTask } from '../store/taskSlice';

const TaskList = () => {
    const tasks = useSelector(
        state => state.task
    );
    const dispatch = useDispatch(); 
  
    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    }
  
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {task}
              <Link
                className='"nav-link'
                style={{ paddingLeft: "8px", display: "inline-block" }}
                to={`/edit-task/${index}`}
              >
                <i
                  className="bi bi-pencil-fill"
                  style={{
                    color: "blue",
                    fontSize: "0.8rem",
                    verticalAlign: "middle",
                  }}
                ></i>
              </Link>
                  <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      style={{
                          border: "none",
                          background: "transparent",
                          cursor:"pointer"
                      }}
                  
                  >
                <i
                  className="bi bi-trash-fill"
                  style={{
                    color: "red",
                    fontSize: "0.8rem",
                    verticalAlign: "middle",
                  }}
                ></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TaskList