import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import { Task } from './Task'

export function TaskList({ tasks, deleteTask, editTask }) {
    function completeTask(id) {
        let task = tasks.find(x => x.id === id);
        task.completed = !task.completed;
    }

    return (
        <>
            <h3>Tasks:</h3>
        
            {
                tasks.length === 0 && 
                <Alert key="noTasksToDo" variant="info">
                    No task ToDo, enjoy your free time!
                </Alert>
            }

            <Accordion>
                {tasks.map(task => {
                    return <Task 
                        {...task}
                        completeTask={completeTask}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        key={task.id}
                    />
                })}
            </Accordion>
        </>
    );
}