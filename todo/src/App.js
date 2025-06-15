import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';

function App() {
  const [newTask, setNewTask] = useState({
    id: null,
    title: "",
    description: ""
  })

  const [tasks, setTasks] = useState([])

  function handleTitleChange(e) {
    setNewTask({
      ...newTask,
      title: e.target.value
    })
  }

  function handleDescriptionChange(e) {
    setNewTask({
      ...newTask,
      description: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(newTask.id !== null) {
      let task = tasks.find(x => x.id === newTask.id);
      task.title = newTask.title;
      task.description = newTask.description;
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
      description: ""
    })
  }

  function deleteTask(id) {
    setTasks(currentTasks => {
      return currentTasks.filter(x => x.id !== id);
    })
  }

  function editTask(id) {
    let task = tasks.find(x => x.id === id);
    setNewTask({
      id: id,
      title: task.title,
      description: task.description
    })
  }

  function completeTask(id) {
    let task = tasks.find(x => x.id === id);
    task.completed = !task.completed;
    alert(`Task ${id} completed!`)
  }

  return (
    <Container className="py-4">
      <h1>ToDo App</h1>
      <Form>
        <Form.Group className="mb-3" controlId="taskForm.Title">
          <Form.Label>Task title</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Task" 
          value={newTask.title}
          onChange={handleTitleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskForm.Description">
          <Form.Label>Task description</Form.Label>
          <Form.Control 
          as="textarea"
          rows={3}
          placeholder="Task description"
          value={newTask.description}
          onChange={handleDescriptionChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskForm.Submit">
          <Button variant="success" onClick={handleSubmit}>Save</Button>
        </Form.Group>
      </Form>

      <h3>Tasks:</h3>
      
      {
        tasks.length === 0 && 
        <Alert key="noTasksToDo" variant="info">
          No task ToDo, enjoy your free time!
        </Alert>
      }
      <Accordion>
        {tasks.map(task => {
          return (
          <Accordion.Item eventKey={task.id} key={task.id}>
            <Accordion.Header as="div">
              <Row>
                <Col>
                  <Form.Check
                    key={"compete-"+task.id}
                    type='checkbox'
                    id={"compete-"+task.id}
                    value={task.completed}
                    onClick={() => completeTask(task.id)}
                  />
                </Col>
                <Col>
                  {task.title}
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
              <p>{task.description}</p>
              <Button variant="primary" onClick={() => editTask(task.id)}>Edit</Button>
              <Button variant="danger" className="ms-2" onClick={() => deleteTask(task.id)}>Delete</Button>
            </Accordion.Body>
          </Accordion.Item>)
        })}
      </Accordion>
    </Container>
  );
}

export default App;
