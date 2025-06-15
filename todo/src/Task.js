import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function Task({ id, title, description, completed, completeTask, editTask, deleteTask }) {
    return (
        <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header as="div">
                <Row>
                    <Col>
                        <Form.Check
                            key={"compete-"+id}
                            type='checkbox'
                            id={"compete-"+id}
                            value={completed}
                            onClick={() => completeTask(id)}
                        />
                    </Col>
                    <Col>{title}</Col>
                </Row>
            </Accordion.Header>
            <Accordion.Body>
                <p>{description}</p>
                <Button variant="primary" onClick={() => editTask(id)}>Edit</Button>
                <Button variant="danger" className="ms-2" onClick={() => deleteTask(id)}>Delete</Button>
            </Accordion.Body>
        </Accordion.Item>
    );
}