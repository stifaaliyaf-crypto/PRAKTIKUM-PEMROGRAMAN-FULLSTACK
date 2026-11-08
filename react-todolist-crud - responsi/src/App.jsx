import React, { useState } from 'react';
import { Container, Navbar, Nav, Table, Button, Modal, Form, Card, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State data inventaris barang gudang
  const [items, setItems] = useState([
    { id: 1, code: 'BRG-001', name: 'Laptop ASUS ROG', category: 'Elektronik', price: 15000000, stock: 5, status: 'Aman' },
    { id: 2, code: 'BRG-002', name: 'Printer Epson L3210', category: 'Periferal', price: 2500000, stock: 2, status: 'Menipis' },
    { id: 3, code: 'BRG-003', name: 'Kertas HVS A4 (Rim)', category: 'ATK', price: 50000, stock: 0, status: 'Habis' },
    { id: 4, code: 'BRG-004', name: 'Mouse Wireless Logitech', category: 'Aksesoris', price: 150000, stock: 12, status: 'Aman' }
  ]);

  // State untuk modal form & pengelolaan CRUD
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, code: '', name: '', category: '', price: '', stock: '', status: 'Aman' });
  const [isEditing, setIsEditing] = useState(false);

  // Fungsi Buka Modal Tambah
  const handleShowAdd = () => {
    setCurrentItem({ id: Date.now(), code: `BRG-00${items.length + 1}`, name: '', category: '', price: '', stock: '', status: 'Aman' });
    setIsEditing(false);
    setShowModal(true);
  };

  // Fungsi Buka Modal Edit
  const handleShowEdit = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
    setShowModal(true);
  };

  // Fungsi Tutup Modal
  const handleClose = () => setShowModal(false);

  // Fungsi Otomatis Tentukan Status Berdasarkan Stok
  const calculateStatus = (stockValue) => {
    const s = parseInt(stockValue);
    if (s === 0) return 'Habis';
    if (s <= 3) return 'Menipis';
    return 'Aman';
  };

  // Fungsi Submit (Create & Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStatus = calculateStatus(currentItem.stock);
    const finalizedItem = { ...currentItem, status: updatedStatus, price: Number(currentItem.price), stock: Number(currentItem.stock) };

    if (isEditing) {
      setItems(items.map((i) => (i.id === finalizedItem.id ? finalizedItem : i)));
    } else {
      setItems([...items, finalizedItem]);
    }
    setShowModal(false);
  };

  // Fungsi Delete
  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus barang ini dari inventaris?')) {
      setItems(items.filter((i) => i.id !== id));
    }
  };

  // Kalkulasi Statistik
  const totalItemsCount = items.length;
  const lowStockCount = items.filter((i) => i.stock <= 3).length;

  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* Navbar Dashboard */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Warehouse Admin | Inventaris Gudang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#dashboard">Manajemen Stok Barang</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {/* Header & Tombol Tambah */}
        <Row className="mb-4 align-items-center">
          <Col>
            <h2 className="fw-bold text-primary">Dashboard Manajemen Inventaris Barang Gudang</h2>
            <p className="text-muted">Kelola data stok, kategori, harga, dan status ketersediaan barang secara real-time.</p>
          </Col>
          <Col xs="auto">
            <Button variant="success" onClick={handleShowAdd} className="shadow-sm">
              + Tambah Barang Baru
            </Button>
          </Col>
        </Row>

        {/* Kartu Statistik */}
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <Card className="border-0 shadow-sm border-top border-primary border-4">
              <Card.Body>
                <h6 className="text-muted">Total Jenis Barang</h6>
                <h3 className="fw-bold text-dark">{totalItemsCount} Item</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="border-0 shadow-sm border-top border-warning border-4">
              <Card.Body>
                <h6 className="text-muted">Peringatan Stok (Menipis/Habis)</h6>
                <h3 className="fw-bold text-danger">{lowStockCount} Barang</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Tabel Data Inventaris */}
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <div className="table-responsive">
              <Table hover className="align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Kode Barang</th>
                    <th>Nama Barang</th>
                    <th>Kategori</th>
                    <th>Harga (Rp)</th>
                    <th>Stok</th>
                    <th>Status Stok</th>
                    <th className="text-center">Aksi (CRUD)</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 ? (
                    items.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td className="fw-bold">{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>Rp {item.price.toLocaleString('id-ID')}</td>
                        <td>{item.stock}</td>
                        <td>
                          <Badge 
                            bg={
                              item.status === 'Aman' ? 'success' : 
                              item.status === 'Menipis' ? 'warning' : 'danger'
                            }
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="text-center">
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-2"
                            onClick={() => handleShowEdit(item)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(item.id)}
                          >
                            Hapus
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center py-4 text-muted">
                        Belum ada data barang di inventaris gudang.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>

      {/* Modal Form Tambah / Edit Barang */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Data Barang' : 'Tambah Barang Gudang Baru'}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Kode Barang</Form.Label>
              <Form.Control
                type="text"
                value={currentItem.code}
                onChange={(e) => setCurrentItem({ ...currentItem, code: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Laptop / Kertas"
                value={currentItem.name}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Elektronik / ATK"
                value={currentItem.category}
                onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga Beli/Jual (Rp)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Contoh: 1500000"
                value={currentItem.price}
                onChange={(e) => setCurrentItem({ ...currentItem, price: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jumlah Stok</Form.Label>
              <Form.Control
                type="number"
                placeholder="Contoh: 10"
                value={currentItem.stock}
                onChange={(e) => setCurrentItem({ ...currentItem, stock: e.target.value })}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Batal
            </Button>
            <Button variant="primary" type="submit">
              {isEditing ? 'Simpan Perubahan' : 'Simpan Barang'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default App;