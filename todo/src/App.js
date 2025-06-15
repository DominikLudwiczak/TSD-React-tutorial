import Container from 'react-bootstrap/Container';
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({
    id: null,
    title: "",
    description: "",
    completed: false
  })

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(x => x.id !== id);
    })
  }

  function editTask(id) {
    let task = { ...tasks.find(x => x.id === id) };
    setNewTask({
      id: id,
      title: task.title,
      description: task.description,
      completed: task.completed
    })
  }

  function submitTask(e) {
    e.preventDefault()

    if(newTask.id !== null) {
      let task = tasks.find(x => x.id === newTask.id);
      task.title = newTask.title;
      task.description = newTask.description;
      task.completed = newTask.completed;
    } else {
      setTasks(currentTasks => {
        return [
          ...currentTasks,
          {
            id: crypto.randomUUID(),
            title: newTask.title,
            description: newTask.description,
            completed: false
          }
        ]
      })
    }

    setNewTask({
      id: null,
      title: "",
      description: "",
      completed: false
    })
  }

  return (
    <Container className="py-4">
      <h1>ToDo App</h1>
      <TaskForm onSubmit={submitTask} newTask={newTask} setNewTask={setNewTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </Container>
  );
}

export default App;
