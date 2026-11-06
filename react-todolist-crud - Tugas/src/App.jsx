import React, { useState } from 'react';
import { Container, Button, Form, InputGroup, Card } from 'react-bootstrap';
import { PlusLg, Search } from 'react-bootstrap-icons';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Go to gym', priority: 'High', status: 'To Do', createdAt: '10:00 AM' },
    { id: 2, name: 'Read a book', priority: 'Low', status: 'Done', createdAt: '11:30 AM' },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    const timeFormatted = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setTasks([...tasks, { ...task, id: Date.now(), createdAt: timeFormatted }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    if (window.confirm('Yakin ingin menghapus tugas ini?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  // Fungsi untuk mengubah status saat bulatan diklik (To Do -> In Progress -> Done -> To Do)
  const toggleStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          let nextStatus = 'To Do';
          if (task.status === 'To Do') nextStatus = 'In Progress';
          else if (task.status === 'In Progress') nextStatus = 'Done';
          else nextStatus = 'To Do';
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || task.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container style={{ maxWidth: '800px' }}>
        <Card className="border-0 shadow-sm rounded-4 p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Task List</h2>
              <p className="text-muted mb-0">Aplikasi TodoList CRUD React 19</p>
            </div>
            <Button variant="primary" className="rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2" onClick={handleShowForm}>
              <PlusLg /> Add Task
            </Button>
          </div>

          <div className="row g-2 mb-4">
            <div className="col-md-8">
              <InputGroup>
                <InputGroup.Text className="bg-white border-end-0 rounded-start-pill ps-3">
                  <Search className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Cari tugas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-start-0 rounded-end-pill shadow-none"
                />
              </InputGroup>
            </div>
            <div className="col-md-4">
              <Form.Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-pill shadow-none"
              >
                <option value="All">Semua Status</option>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </Form.Select>
            </div>
          </div>

          <TaskList 
            tasks={filteredTasks} 
            deleteTask={deleteTask} 
            showEditForm={showEditForm} 
            toggleStatus={toggleStatus} 
          />
        </Card>

        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </Container>
    </div>
  );
}

export default App;