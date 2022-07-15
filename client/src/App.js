import { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Navigation, Sidebar } from './components'
import { Box, Stack, createTheme, ThemeProvider } from '@mui/material'

function App() {

  
  
  const [mode, setMode] = useState("light");
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  
  const darkTheme = createTheme({
    palette: {
          mode
      },
  });
  
  useEffect(() => {
    Axios.get('http://54.235.13.47:5000/read')
    .then((response) => {
      setList(response.data);
    });
  }, []);

  
  const insert = () => {
    Axios.post('http://54.235.13.47:5000/insert',
    { name: name, quantity: quantity });
    Swal.fire(
      `Added ${name}`,
      'Inserted into DB',
      'success'
      )
    };
    

  const update = (id) => {
    Axios.put('http://54.235.13.47:5000/update',
      { id: id, newQuantity: newQuantity });
      Swal.fire(
        `Changed Qty to ${newQuantity}`,
        'Updated DB',
        'success'
      )
  };

  const remove = (id) => {
    Axios.delete(`http://54.235.13.47:5000/remove/${id}`);
    Swal.fire(
      `Deleted id: ${id}`,
      'Removed from DB',
      'success'
    )
  };

  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>
      
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>            
        <h3>Inventory Management Dashboard</h3>
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
            <th>Update</th>
            <th>Actions</th>
          </tr>

          </thead>
          <tbody>
            {list.map((val, key) => {
              return(
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.quantity}</td>
                  <td>
                    <input type="number" placeholder="enter new quantity..."
                      onChange={(event) => { setNewQuantity(event.target.value) }} />
                  </td>
                  <td>
                    <button onClick={() => update(val._id)}>Update</button>

                    <button onClick={() => remove(val._id)}>Delete</button>
                  </td>
                </tr>
              )
              
            })}
          </tbody>
        </table>
        </Box>
        </Stack>
      </Box>
              </ThemeProvider>
  );
}

export default App;