import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  return (
    <Container className="py-4">
      <h1>ToDo App</h1>
      <Form>
        <Form.Group className="mb-3" controlId="taskForm.Title">
          <Form.Label>Task title</Form.Label>
          <Form.Control type="email" placeholder="Task" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskForm.Description">
          <Form.Label>Task description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Task description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="taskForm.Submit">
          <Button variant="success">Add</Button>
        </Form.Group>
      </Form>

      <h3>Tasks:</h3>
      
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Buy milk</Accordion.Header>
          <Accordion.Body>
            <p>Buy 6 milks</p>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" className="ms-2">Delete</Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Prepare for exam</Accordion.Header>
          <Accordion.Body>
            <p>Prepare for TSD exam</p>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" className="ms-2">Delete</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default App;
