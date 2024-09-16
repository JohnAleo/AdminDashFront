import React, { useState ,useEffect} from 'react';
import axios from "axios"
import { BaseURL, errConsole } from '../config';
function NewPage() {
    // React functions
  const [tableData, setTableData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);

  const [name, setName]= useState("")
  const [company, setCompany]= useState("")
  const [cost, setCost]= useState("")
  const [people, setPeople]= useState("")
  const [location, setLocation]= useState("")
  const [type, setType]= useState("")
  const [date, setDate]= useState("")
  const [newName, setNewName]= useState("")
  const [newCompany, setNewCompany]= useState("")
  const [newCost, setNewCost]= useState("")
  const [newPeople, setNewPeople]= useState("")
  const [newLocation, setNewLocation]= useState("")
  const [newType, setNewType]= useState("")
  const [newDate, setNewDate]= useState("")

  useEffect(()=>{
    fetchData(); 
  },)
  const fetchData=async()=>{
    try {
      const response= await axios.get(BaseURL);
      setTableData(response.data);
    } catch (error) {
     console.log(errConsole,error) 
    }
  }
  const handleAddRow = async (event) => {
    event.preventDefault();
    if(name !== ''){
      try {
        const response= await axios.post(BaseURL, {
          name, company,cost, people, location ,type, date
        });
        console.log(response.data)
        fetchData();
        setName('')
        setCompany('')
        setCost('')
        setPeople('')
        setLocation('')
        setType('')
        setDate('')
      } catch (error) {
        console.error(errConsole, error);
      }
    }
    setTableData([...tableData, { name: '', company: '', cost: '', people: '', location: '', type: '', date: '' }]);
  };

  // const handleEditRow = (index) => {
  //   setEditingRow(index);
  // };
  const handleEditRow = async(oldname) =>{
    try {
      const response=await axios.put(`${BaseURL}/${oldname}`, 
      {
      newName,
      newCompany,
      newCost,
      newPeople,
      newLocation,
      newType,
      newDate  
      })
      console.log(response.data)

      setNewName("");
      setNewCompany("");
      setNewCost("")
      setNewPeople("")
      setNewLocation("")
      setNewType("")
      setNewDate("")
      setEditingRow(null)
      fetchData();
    } catch (error) {
      console.error(errConsole)
    }
  }

  const handleDeleteRow = async (oldname) => {
    try {
      const response= await axios.delete(`${BaseURL}/${oldname}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(errConsole)
    }
    // const updatedTableData = [...tableData];
    // updatedTableData.splice(index, 1);
    // setTableData(updatedTableData);
  };

  const handleInputChange = (event, index, field) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = event.target.value;
    setTableData(updatedTableData);
  };

  const handleSaveRow = (index) => {
    setEditingRow(null);
  };
//   


  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Cost</th>
            <th>People</th>
            <th>Location</th>
            <th>Type</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {editingRow === index ? (
                <>
                  <td><input type="text" value={row.name} onChange={(event) => handleInputChange(event, index, 'name')} /></td>
                  <td><input type="text" value={row.company} onChange={(event) => handleInputChange(event, index, 'company')} /></td>
                  <td><input type="number" value={row.cost} onChange={(event) => handleInputChange(event, index, 'cost')} /></td>
                  <td><input type="number" value={row.people} onChange={(event) => handleInputChange(event, index, 'people')} /></td>
                  <td><input type="text" value={row.location} onChange={(event) => handleInputChange(event, index, 'location')} /></td>
                  <td><input type="text" value={row.type} onChange={(event) => handleInputChange(event, index, 'type')} /></td>
                  <td><input type="date" value={row.date} onChange={(event) => handleInputChange(event, index, 'date')} /></td>
                  <td><button onClick={() => handleSaveRow(index)}>Save</button></td>
                </>
              ) : (
                <>
                  <td>{row.name || `no name`}</td>
                  <td>{row.company || `no company`}</td>
                  <td>{row.cost || `no cost`}</td>
                  <td>{row.people || `no people`}</td>
                  <td>{row.location || `no location`}</td>
                  <td>{row.type || `no type`}</td>
                  <td>{row.date || `no date`}</td>
                  <td>
                    <button onClick={() => handleEditRow(index)}>Edit</button>
                    <button onClick={() => handleDeleteRow(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
      
    </div>
  );
}

export default NewPage;