import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Navigation from './components/Navigation';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

function App() {

  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  useEffect(() => {
    Axios.get('http://54.235.13.47:5000/read')
      .then((response) => {
        setList(response.data);
      });
  }, []);

  const insert = () => {
    Axios.post("54.235.13.47/insert",
      { name: name, quantity: quantity });
      Swal.fire(
        `Added ${name}`,
        'Inserted into DB',
        'success'
      )
  };

  const update = (id) => {
    Axios.put("54.235.13.47:5000/update",
      { id: id, newQuantity: newQuantity });
      Swal.fire(
        `Changed Qty to ${newQuantity}`,
        'Updated DB',
        'success'
      )
  };

  const remove = (id) => {
    Axios.delete(`54.235.13.47:5000/remove/${id}`);
    Swal.fire(
      `Deleted id: ${id}`,
      'Removed from DB',
      'success'
    )
  };

  return (
    <div>


      <div className="App">
        <h3>Inventory Management Dashboard</h3>
        <p>Spiceez Spicy Spice Mix - What A Mouthful!</p>

        <div className="addSpices">
          <p>Add new spices to the inventory</p>

          <input type="text" placeholder="Enter Name"
            onChange={(event) => { setName(event.target.value) }} />
          <br />

          <input type="number" placeholder="Enter Quantity"
            onChange={(event) => { setQuantity(event.target.value) }} />
          <br />
          <button onClick={insert}>Add</button>
        </div>

        <h3>Current Inventory:</h3>

        <Container fluid>
          <Row className="tableHeader">


            <Col>Name</Col>
            <Col>Quantity</Col>
            <Col>Update Qty</Col>
            <Col>Action</Col>

          </Row>
          {list.map((val, key) => {
            return (
              <div key={key}>


                <Row>
                  <hr />

                  <Col>{val.name}</Col>
                  <Col>{val.quantity}</Col>

                  <Col>
                    <input type="number" placeholder="enter new quantity..."
                      onChange={(event) => { setNewQuantity(event.target.value) }} />
                  </Col>
                  <Col>
                    <button onClick={() => update(val._id)}>Update</button>

                    <button onClick={() => remove(val._id)}>Delete</button>
                  </Col>

                </Row>
              </div>
            );
          })}
        </Container>

      </div>
    </div>
  );
}

export default App;
