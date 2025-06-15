import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function TaskForm({ onSubmit, newTask, setNewTask }) {

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

    return (
        <Form>
            <Form.Group className="mb-3" controlId="taskForm.Title">
                <Form.Label>Task title</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Task" 
                    value={newTask.title}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskForm.Description">
                <Form.Label>Task description</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows={3}
                    placeholder="Task description"
                    value={newTask.description}
                    onChange={handleDescriptionChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskForm.Submit">
                <Button variant="success" onClick={onSubmit}>Save</Button>
            </Form.Group>
        </Form>
    );
}