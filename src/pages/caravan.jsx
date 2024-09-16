import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Divider from '@mui/joy/Divider';
import DialogActions from '@mui/joy/DialogActions';
import { Stack } from '@mui/joy';
import {campcar} from '../mock/mockmotor';
import  { useEffect, useState,useContext} from 'react'
import axios from "axios"
import { BaseURL, errConsole } from '../config';




export default function MotorComponent() {
  const [openDiscard,setOpenDiscard]=React.useState(false)
  const [open, setOpen] = React.useState(false);
  // const data = campcar.maindata;
  const [motorData, setMotorData]=useState([]);
  const[name,setName]=React.useState({name:""});
  const [age,setAge]=useState("")
  const[newName,setNewName]=useState({name:""});
  const [newAge,setNewAge]=useState("")
  const [editingIndex, setEditingIndex]=useState(null)
    

    useEffect(()=>{
      fetchData(); 
    },[])
    const fetchData=async()=>{
      try {
        const response= await axios.get(BaseURL);
        setName(response.motorData);
      } catch (error) {
       console.log(errConsole,error) 
      }
    }
  
    const handleSubmit =async (event)=>{
      event.preventDefault();
      try{
        const response=await axios.post(BaseURL,
        {
          name,age
        });
        console.log("Add data" ,response.motorData);
        fetchData();
        setName({name:""});
        setAge("");
      } catch(error){
        console.error(errConsole,error);
      }
    }
  
    const handleEdit = async(oldname) =>{
      try {
        const response=await axios.put(`${BaseURL}/${oldname}`, {
        newName,
        newAge,  
        })
        console.log(response.data)
  
        setNewName("");
        setNewAge("");
        setEditingIndex(null)
        fetchData();
      } catch (error) {
        console.error(errConsole)
      }
    }
    const handleChange = (e)=>{
      setName({ ... name,[e.target.name]: e.target.value})
      console.log(setName)
    }
  
    const handleDelete= async(oldname)=>{
      try {
        const response= await axios.delete(`${BaseURL}/${oldname}`);
        console.log(response.data);
        fetchData();
      } catch (error) {
        console.error(errConsole)
      }
    }

  

  return (
    <>
   
    <Box sx={{ width: '100%' }}> 
      <div style={{display:'flex',
                  justifyContent:'space-between',
                  padding:'15px 2%'}}>
        <Typography sx={{fontSize:'22px',fontWeight:'600',}}>
          Motor Car
          </Typography>

         <Button variant="solid" onClick={() => setOpen(true)}> 
           Add New Motor 
          </Button> 
          <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Add New Motor</DialogTitle>
            <DialogContent>Fill in the information of the Motor.</DialogContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2} onSubmit={handleSubmit}>
              <FormControl >
                <FormLabel
                >Name</FormLabel>
                <Input autoFocus required   value={name} onChange={(e) => setName(e.target.value)} />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input  />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input  />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      </div>

     
      <Sheet
        variant="outlined"
        sx={{
          margin:'30px',
          '--TableCell-height': '40px',
          // the number is the amount of the header rows.
          '--TableHeader-height': 'calc(1 * var(--TableCell-height))',
          '--Table-firstColumnWidth': '80px',
          '--Table-lastColumnWidth': '144px',
          // background needs to have transparency to show the scrolling shadows
          '--TableRow-stripeBackground': 'rgba(0 0 0 / 0.04)',
          '--TableRow-hoverBackground': 'rgba(0 0 0 / 0.08)',
          overflow: 'auto',
          background: (theme) =>
            `linear-gradient(to right, ${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(to right, rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 0 50%,
              rgba(167, 162, 162, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 100% 50%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            '40px calc(100% - var(--TableCell-height)), 40px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height)), 14px calc(100% - var(--TableCell-height))',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local, local, scroll, scroll',
          backgroundPosition:
            'var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height), var(--Table-firstColumnWidth) var(--TableCell-height), calc(100% - var(--Table-lastColumnWidth)) var(--TableCell-height)',
          backgroundColor: 'background.surface',
        }}
      >
        <Table
        
          borderAxis="bothBetween"
          stripe="odd"
          hoverRow
          sx={{
           
            '& tr > *:first-child': {
              position: 'sticky',
              left: 0,
              boxShadow: '1px 0 var(--TableCell-borderColor)',
              bgcolor: 'background.surface',
            },
            '& tr > *:last-child': {
              position: 'sticky',
              right: 0,
              bgcolor: 'var(--TableCell-headBackground)',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: 20 }}>No</th>
              <th style={{ width: 130 }}>Name</th>
              <th style={{ width: 130 }}>Company&nbsp;(g)</th>
              <th style={{ width: 130 }}>Cost&nbsp;(g)</th>
              <th style={{ width: 130 }}>People&nbsp;(g)</th>
              <th style={{ width: 130 }}>Location&nbsp;(g)</th>
              <th style={{ width: 130 }}>Type&nbsp;(g)</th>
              <th style={{ width: 130 }}>Date&nbsp;(g)</th>
              <th
                aria-label="last"
                style={{ width: 'var(--Table-lastColumnWidth)'}}
              />
            </tr>
          </thead>
          <tbody >
          {motorData.map((value, key, index)=>{
          return(
          
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.company}</td>
                <td>{value.cost}</td>
                <td>{value.people}</td>
                <td>{value.location}</td>
                <td>{value.type}</td>
                <td>{value.date}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {editingIndex === index ? (
                      <Button size="sm" variant="plain" color="neutral" onClick={() => 
                        handleEdit(value.name)
                      }>Save</Button>
                    ):(
                    <Button size="sm" variant="plain" color="neutral"  onClick={()=> {
                      setEditingIndex(index);
                      setName(value.name);
                      setNewAge(value.age)
                    }}>
                      {" "}
                      Edit
                    </Button>
                    )};

                    <Button size="sm" variant="soft" color="danger" onClick={() => setOpenDiscard(true)}
                      onClickCapture={() => handleDelete(value.name)}>
                      Delete
                    </Button>
                    <Modal open={openDiscard} onClose={() => setOpenDiscard(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />  
            Confirmation
          </DialogTitle>
          <Divider />
          <DialogContent>
            Are you sure you want to discard all of your notes?
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={() => setOpenDiscard(false)}>
              Discard notes
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpenDiscard(false)}>
              Cancel
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
      
                  </Box>
                </td>
              </tr>
        )})};
          </tbody>
        </Table>
      </Sheet>
    </Box>
 
    </>
  )

}

