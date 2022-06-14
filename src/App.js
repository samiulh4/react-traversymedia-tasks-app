import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appinment",
      day: "Feb 5th at 05:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Hello Wrold",
      day: "Feb 5th at 05:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Captain Americ",
      day: "Feb 5th at 05:30pm",
      reminder: false,
    },
  ])
  // Delate Task
  const deleteTask = (id) => {
    //console.log('Deleted', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('Toggle Reminder',id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: task.reminder } : task
      )
    )
  }
  const AddTask = (task) => {
    console.log(task)
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={AddTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'To Task To Show'}
    </div>
  );
}

export default App
