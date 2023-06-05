import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./components/Home";
import TaskList from "./components/TaskList";
import AddTask from './components/AddTask.jsx'
import EditTask from "./components/EditTask.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              House Keeping App
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
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/edit-task/:taskId" element={<EditTask />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
