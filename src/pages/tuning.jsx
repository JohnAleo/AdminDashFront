import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import BasicModalDialog from '.././constants/others/modal';
import { BaseURL } from '../config';
import { ButtonAdd, DeleteButton, EditButton, TableContainer } from '../constants/styles/style';

export default function MotorComponent() {
  const [open, setOpen] = useState(false);
  const [dataList, setDataList] = useState([]);
  
  // State for form fields
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(BaseURL);
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== '') {
      try {
        const token = localStorage.getItem("token"); // Get the token from local storage
        const response = await axios.post("http://localhost:7070/api/data", {
          name,
          cost,
          company,
          location,
          people,
          type,
          date,
        }, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the headers
          }
        });
        console.log(response.data);
        fetchData(); // Fetch updated data
        // Clear the form fields
        setName('');
        setCompany('');
        setLocation('');
        setCost('');
        setType('');
        setDate('');
        setPeople('');
        setOpen(false); // Close the modal
      } catch (error) {
        console.error('Failure:', error);
      }
    }
  };

  return (
    <div>
      <h1>Motor Page</h1>
      <Button onClick={() => setOpen(true)}>Add New Item</Button>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Location</th>
              <th>Cost</th>
              <th>Type</th>
              <th>Date</th>
              <th>People</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.location}</td>
                <td>{item.cost}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>
                  <EditButton>Edit</EditButton>
                  <DeleteButton>Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <BasicModalDialog 
        open={open} 
        setOpen={setOpen} 
        name={name} 
        company={company}
        location={location} 
        cost={cost} 
        type={type}
        people={people} 
        date={date} 
        handleSubmit={handleSubmit} // Pass the handleSubmit function
        onChange={setName} // You can pass other handlers as needed
        onCompany={setCompany} 
        onLocation={setLocation} 
        onCost={setCost}
        onType={setType}
        onDate={setDate}
        onPeople={setPeople}
      />
    </div>
  );
}
