import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    <Stack gap={3}>
      {tasks.map((task) => (
        <Card key={task.id} className="p-3 shadow-sm">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <p className="mb-1"><strong>Task:</strong> {task.name}</p>
              <p className="mb-1"><strong>Priority:</strong> {task.priority}</p>
              <p className="mb-0"><strong>Status:</strong> {task.status}</p>
            </div>
            <div>
              <Button 
                variant="outline-primary" 
                size="sm" 
                className="me-2" 
                onClick={() => showEditForm(task)}
              >
                Edit
              </Button>
              <Button 
                variant="outline-danger" 
                size="sm" 
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </Stack>
  );
};

export default TaskList;