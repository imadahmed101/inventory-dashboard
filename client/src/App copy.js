import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import Navigation from './components/Navigation';
import { Table } from 'react-bootstrap';

function App() {

  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:5000/read")
      .then((response) => {
        setList(response.data);
      });
  }, []);

  const insert = () => {
    Axios.post("http://localhost:5000/insert",
      { name: name, quantity: quantity });

  };

  const update = (id) => {
    Axios.put("http://localhost:5000/update",
      { id: id, newQuantity: newQuantity });
  };

  const remove = (id) => {
    Axios.delete(`http://localhost:5000/remove/${id}`);
  };

  return (
    <div>

      <Navigation />
      <div className="App">
        <h3>Admin Dashboard</h3>
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


        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Update Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nihari Mix</td>
              <td>10</td>
              <td><input type="number"></input></td>
              <td><button>Update</button><button>Delete</button></td>
            </tr>
            <tr>
              <td>Biryani Mix</td>
              <td>8</td>
              <td><input type="number"></input></td>
              <td><button>Update</button><button>Delete</button></td>
            </tr>
            <tr>
              <td>Haleem Mix</td>
              <td>12</td>
              <td><input type="number"></input></td>
              <td><button>Update</button><button>Delete</button></td>
            </tr>
          </tbody>
        </Table>


        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Update Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((val, key) => {
              return (
                    <div key={key}>
            <tr>
                      <td>{val.name}</td>
                      </tr><tr>
                      <td>{val.quantity}</td>
                      </tr><tr>
                      <td>
                        <input type="number" placeholder="enter new quantity..."
                          onChange={(event) => { setNewQuantity(event.target.value) }} />
                      </td>

                      </tr><tr>
                      <td>
                        <button onClick={() => update(val._id)}>Update</button>
                        <button onClick={() => remove(val._id)}>Delete</button>

                      </td>
            </tr>
                    </div>
              );
            })}
            </tbody>
        </Table>


      </div>
    </div>
  );
}

export default App;
