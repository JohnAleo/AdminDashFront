
import Modal from '@mui/joy/Modal';
import Button from '@mui/joy/Button';
import { Box } from '@mui/joy';
const BasicModalDialog = ({
  open, 
  setOpen, 
  name, 
  company, 
  location, 
  cost, 
  type, 
  people, 
  date, 
  handleSubmit, 
  onChange, 
  onCompany, 
  onCost, 
  onLocation, 
  onType, 
  onDate, 
  onPeople
}) => {
  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit(e); // Call the submit handler passed as a prop
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ /* styling for the modal box */ }}>
        <h2>Add New Item</h2>
        <form onSubmit={handleFormSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={onChange} 
            required 
          />
          <input 
            type="text" 
            placeholder="Company" 
            value={company} 
            onChange={onCompany} 
            required 
          />
          <input 
            type="text" 
            placeholder="Location" 
            value={location} 
            onChange={onLocation} 
            required 
          />
          <input 
            type="number" 
            placeholder="Cost" 
            value={cost} 
            onChange={onCost} 
            required 
          />
          <input 
            type="text" 
            placeholder="Type" 
            value={type} 
            onChange={onType} 
            required 
          />
          <input 
            type="date" 
            placeholder="Date" 
            value={date} 
            onChange={onDate} 
            required 
          />
          <input 
            type="number" 
            placeholder="People" 
            value={people} 
            onChange={onPeople} 
            required 
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};
