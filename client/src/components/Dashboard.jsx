import { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Box, Stack, createTheme, ThemeProvider, Typography } from '@mui/material'

function Dashboard() {


  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);


  useEffect(() => {
    Axios.get('http://54.234.150.219:5000/read')
      .then((response) => {
        setList(response.data);
      });
  }, []);


  const insert = () => {
    Axios.post('http://54.234.150.219:5000/insert',
      { name: name, quantity: quantity });
    Swal.fire(
      `Added ${name}`,
      'Inserted into DB',
      'success'
    )
  };

  const update = (id) => {
    Axios.put('http://54.234.150.219:5000/update',
      { id: id, newQuantity: newQuantity });
    Swal.fire(
      `Changed Qty to ${newQuantity}`,
      'Updated DB',
      'success'
    )
  };

  const updateFeatured = (id) => {
    Axios.put('http://54.234.150.219:5000/updatefeatured',
      { id: id });
    Swal.fire(
      'Changed To Featured Status',
      'Updated DB',
      'success'
    )
  };

  const updateUnfeatured = (id) => {
    Axios.put('http://54.234.150.219:5000/updateunfeatured',
      { id: id });
    Swal.fire(
      'Changed To Unfeatured Status',
      'Updated DB',
      'success'
    )
  };

  const remove = (id) => {
    Axios.delete(`http://54.234.150.219:5000/remove/${id}`);
    Swal.fire(
      `Deleted id: ${id}`,
      'Removed from DB',
      'success'
    )
  };

  return (
    <Box flex={3} p={2}>
      <Typography variant='h3'>Inventory Management Dashboard</Typography>
      <p>Spiceez Spicy Spice Mix - What A Mouthful!</p>

      <p>Add new spices to the inventory</p>

      <input type="text" placeholder="Enter Name"
        onChange={(event) => { setName(event.target.value) }} />
      <br />

      <input type="number" placeholder="Enter Quantity"
        onChange={(event) => { setQuantity(event.target.value) }} />
      <br />
      <button onClick={insert}>Add</button>

      <h3>Current Inventory:</h3>

      <table>
        <thead>

          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Featured</th>
            <th>Update</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {list.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.quantity}</td>
                <td>{val.featured}</td>
                <td>
                  <input type="number" placeholder="enter new quantity..."
                    onChange={(event) => { setNewQuantity(event.target.value) }} />
                </td>
                <td>
                  <button onClick={() => updateUnfeatured(val._id)}>Unfeatured</button>
                  <button onClick={() => updateFeatured(val._id)}>Featured</button>
                  <button onClick={() => update(val._id)}>Update</button>
                  <button onClick={() => remove(val._id)}>Delete</button>
                </td>
              </tr>
            )

          })}
        </tbody>
      </table>
    </Box>


  );
}

export default Dashboard;