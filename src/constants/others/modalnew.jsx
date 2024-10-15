// // src/components/ModalForm.js
// import React, { useState, useEffect } from 'react';

// const ModalForm = ({ 
//   isOpen,
//   onRequestClose,
//   onSubmit, 
//   editData }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     location:'',
//     cost: '',
//     type: '', 
//     date: '',
//     people: '',
//   });

//   useEffect(() => {
//     if (editData) {
//       setFormData(editData);
//     }
//   }, [editData]);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     onRequestClose();
//   };

//   return (
//     <div>
//       <h2>{editData ? 'Edit Item' : 'Add Item'}</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
//         <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
//         <input type="number" name="cost" placeholder="Cost" value={formData.cost} onChange={handleChange} required />
//         <input type="text" name="type" placeholder="Type" value={formData.type} onChange={handleChange} required />
//         <input type="text" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
//         <input type="number" name="people" placeholder="People" value={formData.people} onChange={handleChange} required />
//         <button type="submit">Submit</button>
//         <button type="button" onClick={onRequestClose}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default ModalForm;



import React, { useState, useEffect } from 'react';

const ModalForm = ({ isOpen, onRequestClose, onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    location: '',
    cost: '',
    type: '',
    date: '',
    people: '',
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData); // Populate form with existing data for editing
    } else {
      setFormData({ // Reset form data for adding new item
        name: '',
        company: '',
        location: '',
        cost: '',
        type: '',
        date: '',
        people: '',
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data back to the parent
    onRequestClose(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        name="cost"
        value={formData.cost}
        onChange={handleChange}
        placeholder="Cost"
      />
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder="Date"
      />
      <input
        name="people"
        value={formData.people}
        onChange={handleChange}
        placeholder="People"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={onRequestClose}>Cancel</button>
    </form>
  );
};

export default ModalForm;
