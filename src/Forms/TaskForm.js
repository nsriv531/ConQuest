import React, { useState } from "react";

import '../StylingForms/TaskFormStyling.css'; 

const TaskForm = () => {
  // State to manage the list of tasks and their checked status
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: false },
    { id: 3, name: "Task 3", completed: false },
  ]);

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const completedTasks = tasks.filter((task) => task.completed);
    console.log("Completed tasks:", completedTasks);
    // Further processing can be done here (e.g., sending data to a server)
  };

  return (
    <div className="flex justify-end">
      <div className="bg-white w-72 p-6 rounded-xl shadow-lg transition transform hover:scale-105 mr-10">
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Task List</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                  className="form-checkbox h-6 w-6 text-indigo-600 rounded-full focus:ring focus:ring-indigo-300 transition duration-200"
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={`text-gray-700 ${task.completed ? "line-through" : ""}`}
                >
                  {task.name}
                </label>
              </div>
            </div>
          ))}
          {/* <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition-colors font-semibold"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
