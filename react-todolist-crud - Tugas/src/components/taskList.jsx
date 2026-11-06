import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';
import { PencilSquare, Trash3, CheckCircle, HourglassSplit, Circle } from 'react-bootstrap-icons';

const TaskList = ({ tasks, deleteTask, showEditForm, toggleStatus }) => {
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return <Badge bg="danger" className="px-3 py-2 rounded-pill">High</Badge>;
      case 'Medium':
        return <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill">Medium</Badge>;
      case 'Low':
        return <Badge bg="success" className="px-3 py-2 rounded-pill">Low</Badge>;
      default:
        return <Badge bg="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status, task) => {
    switch (status) {
      case 'Done':
        return <CheckCircle className="text-success fs-5 me-2" style={{ cursor: 'pointer' }} onClick={() => toggleStatus(task.id)} title="Ubah status" />;
      case 'In Progress':
        return <HourglassSplit className="text-warning fs-5 me-2" style={{ cursor: 'pointer' }} onClick={() => toggleStatus(task.id)} title="Ubah status" />;
      default:
        return <Circle className="text-secondary fs-5 me-2" style={{ cursor: 'pointer' }} onClick={() => toggleStatus(task.id)} title="Ubah status" />;
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-4 text-muted">
        <p>Belum ada tugas. Silakan klik tombol <strong>+ Add Task</strong>.</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {tasks.map((task) => (
        <Card key={task.id} className="border-0 shadow-sm rounded-4">
          <Card.Body className="d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center me-3" style={{ flex: 1 }}>
              {/* Bulatan status sekarang bisa diklik */}
              {getStatusIcon(task.status, task)}
              <div>
                <h6 className={`mb-1 fw-bold ${task.status === 'Done' ? 'text-decoration-line-through text-muted' : ''}`}>
                  {task.name}
                </h6>
                <small className="text-muted" style={{ fontSize: '0.8rem' }}>
                  Status: {task.status} • {task.createdAt}
                </small>
              </div>
            </div>

            <div className="me-3">
              {getPriorityBadge(task.priority)}
            </div>

            <div className="d-flex gap-2">
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-3 border-0 bg-light"
                onClick={() => showEditForm(task)}
                title="Edit"
              >
                <PencilSquare className="fs-6 text-primary" />
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="rounded-3 border-0 bg-light"
                onClick={() => deleteTask(task.id)}
                title="Delete"
              >
                <Trash3 className="fs-6 text-danger" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;