import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { useState } from 'react';
import { useEffect } from 'react';
import { BaseURL } from '../../config';
import { errConsole } from '../../config';
import { CustomLabel, FileUploadWrapper, StyledFileUpload } from "../styles/stylenew";
const axios = require("axios")



  export default function BasicModalNew ({ onAddData }) {

      const [open, setOpen]=React.useState(false);

      ////Data/////
    const [name, setName] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [cost, setCost] = React.useState("");
    const [people, setPeople] = React.useState("");
    const [type, setType] = React.useState("");
    const [date, setDate] = React.useState("");

    const [message, setMessage]=React.useState("")

    const handleSubmit = async (event)=>{
      event.preventDefault();
      if(name !== ''){
        try {
          const response = await axios.post("http://localhost:7070/api/data", {
              name,       
              cost,
              company,
              location,
              people,
              type,
              date,
          });
         const data= await response.json()
       
         console.log(response.data);
         onAddData(data.newData)
          setOpen(false);
      } catch (error) {
          console.error('failure', error)
      }  
      } 
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeCost = (e) => {
    setCost(e.target.value);
  };
  const handleChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangePeople = (e) => {
    setPeople(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  
 

  return (
    <React.Fragment>
        <Button
          variant="outlined"
          color="neutral"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          New Motor
        </Button>
      <Modal  
        open={open}
        onClose={() => setOpen(false)}>
        <ModalDialog>
        <FileUploadWrapper>
              <StyledFileUpload id="fileInput" type="file" />
              <CustomLabel htmlFor="fileInput"></CustomLabel>
              Upload photo
              <Button   >AUTO FILL DEMO DATA</Button>
            </FileUploadWrapper>
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={1}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={handleChangeName}
                    />

              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input 
                 type="text"
                 placeholder="Company"
                 value={company}
                 onChange={handleChangeCompany} />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input 
                 type="text"
                 placeholder="Location"
                 value={location}
                 onChange={handleChangeLocation} />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input 
                 type="number"
                 placeholder="Cost"
                 value={cost}
                 onChange={handleChangeCost} />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input 
                 type="text"
                 placeholder="Type"
                 value={type}
                 onChange={handleChangeType} />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input 
                 type="date"
                 placeholder="Date"
                 value={date}
                 onChange={handleChangeDate} />
              </FormControl>
              <FormControl>
              <FormLabel>People</FormLabel>
                <Input 
                 type="number"
                 placeholder="People"
               value={people}
                 onChange={handleChangePeople} />
              </FormControl>
    
              <Button  
                type="submit"
              >Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}