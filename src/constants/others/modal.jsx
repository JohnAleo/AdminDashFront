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
const axios = require("axios")

  export default function BasicModalDialog ({
    open,
    setOpen,
    name,
    handleSubmit, 
    onChange,   
    onCompany, 
    onLocation, 
    onCost, 
    onType, 
    onPeople, 
    onDate,   
    cost,   
    company,
    location,
    people,
    type,
    date,  } ) {
 
//  const onClik = ()=>{
//   setOpen(false);
//  }
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
                      onChange={ onChange}
                    />

              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input 
                 type="text"
                 placeholder="Company"
                 value={company}
                 onChange={ onCompany} />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input 
                 type="text"
                 placeholder="Location"
                 value={location}
                 onChange={ onLocation} />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input 
                 type="number"
                 placeholder="Cost"
                 value={cost}
                 onChange={ onCost} />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input 
                 type="text"
                 placeholder="Type"
                 value={type}
                 onChange={ onType} />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input 
                 type="date"
                 placeholder="Date"
                 value={date}
                 onChange={ onDate} />
              </FormControl>
              <FormControl>
              <FormLabel>People</FormLabel>
                <Input 
                 type="number"
                 placeholder="People"
               value={people}
                 onChange={ onPeople} />
              </FormControl>
    
              <Button  
                type="submit"
                onClick={() => handleSubmit()}
              >Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}