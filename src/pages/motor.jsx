
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Box from '@mui/joy/Box';
// import Button from '@mui/joy/Button';
// import Table from '@mui/joy/Table';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import Add from '@mui/icons-material/Add';
// // import EditIcon from '@mui/icons-material/Edit';
// // import ImgModal from '../../modal/imgmodal';

// // import { CiCirclePlus } from "react-icons";
// import { errConsole } from "../config";
// import { BaseURL } from '../config';
// import BasicModalDialog from '.././constants/others/modal';
// import { ButtonAdd, DeleteButton, Deletewrapper, EditButton, EditWrapper, SaveButton, Savewrapper, TableContainer } from '../constants/styles/style';

// export default function MotorComponent() {
//   const [open, setOpen] = useState(false);
//   const [dataList, setDataList] = useState([]);  
//   const [editingIndex, setEditingIndex] =  useState(Array(dataList.length).fill(false)); 


//   const [name, setName] = useState("");
//   const [cost, setCost] = useState("");
//   const [company, setCompany] = useState("");
//   const [license, setLicense] = useState("");
//   const [location, setLocation] = useState("");
//   const [people, setPeople] = useState("");
//   const [type, setType] = useState("");
//   const [date, setDate] = useState("");
  
// // For editing
//   const [newName, setNewName] = useState();
//   const [newCompany, setNewCompany] = useState();
//   const [newLicense, setNewLicense] = useState();
//   const [newPeople, setNewPeople] = useState();
//   const [newCost, setNewCost] = useState();
//   const [newType, setNewType] = useState();
//   const [newDate, setNewDate] = useState();
//   const [newLocation, setNewLocation] = useState();

//   const handleSubmit = async (event)=>{
//     event.preventDefault();
//     if(name !== ''){
//       try {
//         const response = await axios.post("http://localhost:7070/api/data", {
//             name,       
//             cost,
//             company,
//             license,
//             location,
//             people,
//             type,
//             date,
//         });
//         console.log(response.data)
//         fetchData();
//         setName('');
//         setCompany('');
//         setLocation('');
//         setCost('');      
//         setType('');
//         setDate('');
//         setPeople('');
//         setLicense('');
//         setOpen(false);
//     } catch (error) {
//         console.error('failure', error)
//     }  
//     } 
// }
 
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(BaseURL);  
//       setDataList(response.data);  
//     } catch (error) {
//       console.error(errConsole, error);
//     }
//   };

//   useEffect(() => {
//     fetchData();  
//   }, );

  
//   const handleEdit = async (oldName) => {
//     try {
//       const response = await axios.put(`${BaseURL}/${oldName}`, {
//         newName,
//         newCost,
//         newCompany, 
//         newLicense, 
//         newLocation, 
//         newPeople, 
//         newType, 
//         newDate
//       });
//       console.log(response.data);
//       fetchData(); 
//       setNewName("");
//       setNewCost("");
//       setNewCompany("");
//       setNewLicense("");
//       setNewLocation("");
//       setNewPeople("");
//       setNewType("");
//       setNewDate();

//       // setEditingIndex( ); 
//     } catch (error) {
//       console.log(errConsole, error);
//     }
//   };

//   const handleClick = (index) =>{
//     const newEditMode = [...editingIndex];
//     newEditMode[index] = !newEditMode[index]
//     setEditingIndex(newEditMode)
//   }

// const handleChange = (e) => {
//     setName(e.target.value)
//     console.log("name is clicked")
// };
// const handleCompanyChange = (e) => {
//   setCompany(e.target.value)
//   console.log("company is clicked")
// };
// const handleLocationChange = (e) => {
// setLocation(e.target.value)
// console.log("brand is clicked")
// };
// const handleCostChange = (e) => {
//   setCost(e.target.value)
//   console.log("name is clicked")
// };
// const handleTypeChange = (e) => {
// setType(e.target.value)
// console.log("brand is clicked")
// };
// const handleDateChange = (e) => {
//   setDate(e.target.value)
//   console.log("name is clicked")
// };
// const handlePeopleChange = (e) => {
// setPeople(e.target.value)
// console.log("brand is clicked")
// };


// const DeleteMotor = async (name) => {
//     try {
//       const response = await axios.delete(`${BaseURL}/${name}`);
//       console.log(response.data);
//     } catch (error) {
//       console.log(errConsole, error);
//     }
//   };


//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding:"0px 5%" }}>
//         <h1>Motor Page</h1>
  
           
//       </div>

// <TableContainer>
//       <Box sx={{ width: '100%' }}>
//         <Sheet
//           variant="outlined"
//           sx={{
//             '--TableCell-height': '40px',
//             '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
//             '--Table-firstColumnWidth': '80px',
//             '--Table-lastColumnWidth': '144px',
//             '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
//             '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
//             overflow: 'auto',
//             background: (theme) => `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0))`,
//           }}
//         >
//           <Table borderAxis="bothBetween" 
//           stripe="odd" hoverRow
//            sx={{ '& tr > *:first-child': 
//            { position: 'sticky', left: 0, bgcolor: 'background.surface' },
//             '& tr > *:last-child': { position: 'sticky', right: 0, bgcolor: 'var(--TableCell-headBackground)' } 
//             }}>
//             <thead>
//               <tr>
//                 <th style={{ width: 30}}>N</th>
//                 <th style={{ width: 100 }}>Name</th>
//                 <th style={{ width: 100 }}>Company</th>
//                 <th style={{ width: 100 }}>Location</th>
//                 <th style={{ width: 100 }}>Cost</th>
//                 <th style={{ width: 80 }}>Type</th>
//                 <th style={{ width: 100 }}>Date</th>
//                 <th style={{ width: 50 }}>People</th>
//                 <th style={{ width: 100 }} >Buttons</th>
//               </tr>
//             </thead>
//             <tbody>
            
//               {dataList.map((value,index) =>{
//                 return(
//                   <tr key={index}>
//                     {editingIndex[index] ?
//                     <> 
//                   <td>{index + 1}</td>
//                   <td><input type="text" name='name' onChange={(e) =>setNewName(e.target.value)} /></td>   
//                   <td><input type="text" name='company' onChange={(e) =>setNewCompany(e.target.value)} /></td>  
//                   <td><input type="text" name='location' onChange={(e) =>setNewLocation(e.target.value)} /></td>  
//                   <td><input type="number" name='cost' onChange={(e) =>setNewCost(e.target.value)} /></td>  
//                   <td><input type="text" name='type' onChange={(e) =>setNewType(e.target.value)} /></td>  
//                   <td><input type="date" name='date' onChange={(e) =>setNewDate(e.target.value)} /></td>  
//                   <td><input type="number" name='people' onChange={(e) =>setNewPeople(e.target.value)} /></td>  
//                   <td style={{display:'flex',gap:'7px'}}>
//                   <Savewrapper>
//                       <SaveButton  onClick={(e) => {handleEdit(value.name); handleClick(index);}} >Save</SaveButton>
//                   </Savewrapper>
//                   <Deletewrapper>
//                       <DeleteButton  onClick={() => DeleteMotor(value.name)} >Delete</DeleteButton>
//                   </Deletewrapper>
//                   </td>
//                   </>:<>
//                   <td>{index + 1}</td>
//                   <td>{value.name || "no data"}</td>
//                   <td>{value.company || "no data"}</td>
//                   <td>{value.location || "no data"}</td>
//                   <td>{value.cost || "no data"}</td>
//                   <td>{value.type || "no data"}</td>
//                   <td>{value.date || "no data"}</td>
//                   <td>{value.people || "no data"}</td>
//                   <td  style={{display:'flex',gap:'7px'}}>
//                   <EditWrapper>
//                     <EditButton  onClick={(e) => handleClick(index)}>Edit</EditButton>
//                   </EditWrapper>
//                   <Deletewrapper>
//                     <DeleteButton  onClick={() => DeleteMotor(value.name)} >Delete</DeleteButton>
//                   </Deletewrapper>
//                   </td>
                  
//                   </>
//                   }

//                   </tr>
//                 )
//               })}
              
//             </tbody>
//           </Table>
//         </Sheet>

//         <BasicModalDialog 
//            open={open} setOpen={setOpen} 
//            name={name} 
//            company={company}
//            location={location} 
//            cost={cost} 
//            type={type}
//            people={people} 
//            date={date} 
//            handleSubmit={handleSubmit}
//            onChange={handleChange}
//            onCompany={handleCompanyChange} 
//            onCost={handleCostChange}
//            onLocation={handleLocationChange} 
//            onType={handleTypeChange}
//            onDate={handleDateChange} 
//            onPeople={handlePeopleChange}
//            />
//       </Box>
//       </TableContainer>
//     </div>
//   );
// }