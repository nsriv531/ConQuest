import React, { useState } from "react";
import '../StylingForms/TaskFormStyling.css'; 

const TaskForm = ({ onCheckboxClick }) => {
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
    // Call the function to cycle avatars
    onCheckboxClick();
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
      <div className="bg-white w-72 p-6 shadow-lg transition transform hover:scale-105 mr-10 border-4" style={{ border: '6px solid #6b4226', width: '500px', height: '300px' }}>
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Task List</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 shadow-sm hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                  className="form-checkbox h-8 w-8 text-indigo-600 focus:ring focus:ring-indigo-300 transition duration-200"
                />
                <label htmlFor={`task-${task.id}`} className={`text-gray-700 ${task.completed ? "line-through" : ""}`}>
                  {task.name}
                </label>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
