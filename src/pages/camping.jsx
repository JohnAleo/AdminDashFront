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
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import { caravan } from '../mock/caravanmock';



export default function CampingComponent() {
  const [open, setOpen] = React.useState(false);
  const data = caravan.maindata;
  console.log("camp carausel data:", data)
  return (
    <>
   
    <Box sx={{ width: '100%' }}> 
      <div style={{display:'flex',
                  justifyContent:'space-between',
                  padding:'15px 2%'}}>
        <Typography sx={{fontSize:'22px',fontWeight:'600',}}>
          Capmping Place
          </Typography>
         <Button variant="solid" onClick={() => setOpen(true)}> 
           Add New Place 
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
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input required />
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
              rgba(0, 0, 0, 0.12),
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
          {data.map((value, key, index)=>{
  return(
          
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.car.name}</td>
                <td>{value.car.company}</td>
                <td>{value.car.cost}</td>
                <td>{value.car.people}</td>
                <td>{value.car.location}</td>
                <td>{value.car.type}</td>
                <td>{value.car.date}</td>
                <td>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="sm" variant="plain" color="neutral">
                      Edit
                    </Button>
                    <Button size="sm" variant="soft" color="danger">
                      Delete
                    </Button>
                  </Box>
                </td>
              </tr>
        )})};
          </tbody>
        </Table>
      </Sheet>
    </Box>
 
    </>
  );
}
