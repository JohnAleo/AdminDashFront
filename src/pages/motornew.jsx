// // // src/components/AdminDashboard.js
// // import React, { useState, useEffect } from 'react';
// // import Modal from 'react-modal';
// // import ModalForm from '../constants/others/modalnew';
// // import axios from 'axios';
// // import { BaseURL } from '../config';

// // Modal.setAppElement('#root');

// // const MotorNew = () => {
// //   const [items, setItems] = useState([]);
// //   const [isModalOpen, setModalOpen] = useState(false);
// //   const [editData, setEditData] = useState(null);

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const fetchItems = async () => {
// //     try {
// //       const response = await fetch(`${BaseURL}`); // Update this URL
// //       setItems(response.data);
// //     } catch (error) {
// //       console.error('Error fetching items:', error);
// //     }
// //   };

// //   const openModal = (data = null) => {
// //     setEditData(data);
// //     setModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setEditData(null);
// //     setModalOpen(false);
// //   };

// //   const handleSubmit = async (data) => {
// //     try {
// //       if (editData) {
// //         await axios.put(`${BaseURL}/${editData.id }`, data); // Update this URL
// //         setItems((prev) =>
// //           prev.map((item) => (item.name === editData.name ? data : item))
// //         );
// //       } else {
// //         const response = await axios.post(BaseURL, data); // Update this URL
// //         setItems((prev) => [...prev, response.data]);
// //       }
// //     } catch (error) {
// //       console.error('Error saving item:', error);
// //     }
// //   };

// //   const handleDelete = async (name) => {
// //     try {
// //       await axios.delete(`${BaseURL}/${name}`); // Update this URL
// //       setItems((prev) => prev.filter((item) => item.name !== name));
// //     } catch (error) {
// //       console.error('Error deleting item:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Admin Dashboard</h1>
// //       <button onClick={() => openModal()}>Add Item</button>
// //       <table>
// //         <thead>
// //           <tr>
// //           <th style={{ width: 30}}>N</th>
// //                 <th style={{ width: 100 }}>Name</th>
// //                 <th style={{ width: 100 }}>Company</th>
// //                 <th style={{ width: 100 }}>Location</th>
// //                 <th style={{ width: 100 }}>Cost</th>
// //                 <th style={{ width: 80 }}>Type</th>
// //                 <th style={{ width: 100 }}>Date</th>
// //                 <th style={{ width: 50 }}>People</th>
// //                 <th style={{ width: 100 }} >Buttons</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item) => (
// //             <tr key={item.id}> {/* Assuming item has a unique 'id' */}
// //               <td>{item.name}</td>
// //               <td>{item.company}</td>
// //               <td>{item.location}</td>
// //               <td>{item.cost}</td>
// //               <td>{item.type}</td>
// //               <td>{item.date}</td>
// //               <td>{item.people}</td>
// //               <td>
// //                 <button onClick={() => openModal(item)}>Edit</button>
// //                 <button onClick={() => handleDelete(item.name)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
// //         <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleSubmit} editData={editData} />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default MotorNew;


// // src/components/AdminDashboard.js






// // import React, { useState, useEffect } from 'react';
// // import Modal from 'react-modal';
// // import ModalForm from '../constants/others/modalnew';
// // import axios from 'axios';
// // import { BaseURL } from '../config';

// // Modal.setAppElement('#root');

// // const MotorNew = () => {
// //   const [items, setItems] = useState([]);
// //   const [isModalOpen, setModalOpen] = useState(false);
// //   const [editData, setEditData] = useState(null);

// //   // Retrieve the token from local storage
// //   const token = localStorage.getItem('token'); // Change 'token' to your actual token key

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const fetchItems = async () => {
// //     try {
// //       const response = await axios.get(BaseURL, {
// //         headers: {
// //           Authorization: `Bearer ${token}`, // Include the token in the headers
// //         },
// //       });
// //       setItems(response.data);
// //     } catch (error) {
// //       console.error('Error fetching items:', error);
// //     }
// //   };

// //   const openModal = (data = null) => {
// //     setEditData(data);
// //     setModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setEditData(null);
// //     setModalOpen(false);
// //   };

// //   const handleSubmit = async (data) => {
// //     try {
// //       if (editData) {
// //         await axios.put(`${BaseURL}/${editData.id}`, data, {
// //           headers: {
// //             Authorization: `Bearer ${token}`, // Include the token for the PUT request
// //           },
// //         });
// //         setItems((prev) =>
// //           prev.map((item) => (item.id === editData.id ? data : item)) // Use item.id for unique identification
// //         );
// //       } else {
// //         const response = await axios.post(BaseURL, data, {
// //           headers: {
// //             Authorization: `Bearer ${token}`, // Include the token for the POST request
// //           },
// //         });
// //         setItems((prev) => [...prev, response.data]);
// //       }
     
// //     } catch (error) {
// //       console.error('Error saving item:', error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`${BaseURL}/${id}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`, // Include the token for the DELETE request
// //         },
// //       });
// //       setItems((prev) => prev.filter((item) => item.id !== id)); // Use item.id for unique identification
// //     } catch (error) {
// //       console.error('Error deleting item:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Admin Dashboard</h1>
// //       <button onClick={() => openModal()}>Add Item</button>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th style={{ width: 30 }}>N</th>
// //             <th style={{ width: 100 }}>Name</th>
// //             <th style={{ width: 100 }}>Company</th>
// //             <th style={{ width: 100 }}>Location</th>
// //             <th style={{ width: 100 }}>Cost</th>
// //             <th style={{ width: 80 }}>Type</th>
// //             <th style={{ width: 100 }}>Date</th>
// //             <th style={{ width: 50 }}>People</th>
// //             <th style={{ width: 100 }}>Buttons</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item) => (
// //             <tr key={item.id}> {/* Assuming item has a unique 'id' */}
// //               <td>{item.name}</td>
// //               <td>{item.company}</td>
// //               <td>{item.location}</td>
// //               <td>{item.cost}</td>
// //               <td>{item.type}</td>
// //               <td>{item.date}</td>
// //               <td>{item.people}</td>
// //               <td>
// //                 <button onClick={() => openModal(item)}>Edit</button>
// //                 <button onClick={() => handleDelete(item.id)}>Delete</button> {/* Use item.id for deletion */}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
// //         <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleSubmit} editData={editData} />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default MotorNew;





// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import ModalForm from '../constants/others/modalnew';
// import axios from 'axios';
// import { BaseURL } from '../config';

// Modal.setAppElement('#root');

// const MotorNew = () => {
//   const [items, setItems] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [editData, setEditData] = useState(null);

//   // Retrieve the token from local storage
//   const token = localStorage.getItem('token'); // Change 'token' to your actual token key

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     if (!token) {
//       console.error('No token found. Please log in.');
//       return;
//     }

//     try {
//       const response = await axios.get(BaseURL, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the token in the headers
//         },
//       });
//       setItems(response.data);
//     } catch (error) {
//       // Improved error logging
//       if (error.response) {
//         console.error('Error fetching items:', error.response.data);
//       } else if (error.request) {
//         console.error('No response received:', error.request);
//       } else {
//         console.error('Error setting up the request:', error.message);
//       }
//     }
//   };

//   const openModal = (data = null) => {
//     setEditData(data);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setEditData(null);
//     setModalOpen(false);
//   };

//   // const handleSubmit = async (data) => {
//   //   try {
//   //     if (editData) {
//   //       await axios.put(`${BaseURL}/${editData.id}`, data, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`, // Include the token for the PUT request
//   //         },
//   //       });
//   //       setItems((prev) =>
//   //         prev.map((item) => (item.id === editData.id ? { ...item, ...data } : item)) // Use item.id for unique identification
//   //       );
//   //     } else {
//   //       const response = await axios.post(BaseURL, data, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`, // Include the token for the POST request
//   //         },
//   //       });
//   //       setItems((prev) => [...prev, response.data]);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error saving item:', error);
//   //   }
//   // };

 


//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BaseURL}/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Include the token for the DELETE request
//         },
//       });
//       setItems((prev) => prev.filter((item) => item.id !== id)); // Use item.id for unique identification
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <button onClick={() => openModal()}>Add Item</button>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ width: 30 }}>N</th>
//             <th style={{ width: 100 }}>Name</th>
//             <th style={{ width: 100 }}>Company</th>
//             <th style={{ width: 100 }}>Location</th>
//             <th style={{ width: 100 }}>Cost</th>
//             <th style={{ width: 80 }}>Type</th>
//             <th style={{ width: 100 }}>Date</th>
//             <th style={{ width: 50 }}>People</th>
//             <th style={{ width: 100 }}>Buttons</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((value, index) => {
//             return(
//             <tr key={index+1}> {/* Assuming item has a unique 'id' */}
//               <td>{value.name}</td>
//               <td>{value.company}</td>
//               <td>{value.location}</td>
//               <td>{value.cost}</td>
//               <td>{value.type}</td>
//               <td>{value.date}</td>
//               <td>{value.people}</td>
//               <td>
//                 <button onClick={() => openModal(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button> {/* Use item.id for deletion */}
//               </td>
//             </tr>
//           )})}
//         </tbody>
//       </table>
//       <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
//         <ModalForm isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleSubmit} editData={editData} />
//       </Modal>
//     </div>
//   );
// };

// export default MotorNew;




// //Oxirgi ko'rinishi

// // import React, { useState, useEffect } from 'react';
// // import Modal from 'react-modal';
// // import ModalForm from '../constants/others/modalnew';
// // import axios from 'axios';
// // import { BaseURL } from '../config';

// // Modal.setAppElement('#root');

// // const MotorNew = () => {
// //   const [items, setItems] = useState([]);
// //   const [isModalOpen, setModalOpen] = useState(false);
// //   const [editData, setEditData] = useState(null);

// //   const token = localStorage.getItem('token'); // Change 'token' to your actual token key

// //   useEffect(() => {
// //     fetchItems();
// //   }, []);

// //   const fetchItems = async () => {
// //     try {
// //       const response = await axios.get(BaseURL, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       console.log("fetching")
// //       setItems(response.data);
// //     } catch (error) {
// //       console.error('Error fetching items:', error);
// //     }
// //   };

// //   const openModal = (data = null) => {
// //     setEditData(data); // Set the data for editing
// //     setModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setEditData(null);
// //     setModalOpen(false);
// //   };

// //   const handleSubmit = async (data) => {

// //     try {
// //       if (editData) {
// //         // Editing an existing item
// //         const response = await axios.put(`${BaseURL}/${editData.id}`, data, {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         setItems((prev) =>
// //           prev.map((item) => (item.id === editData.id ? response.data : item))
// //         );
// //       } else {
// //         // Adding a new item
// //         const response = await fetch(BaseURL, {
// //           method:"POST",
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         console.log("1")
// //         setItems((prev) => [...prev, response.data]);
// //         console.log('2')
// //       }
// //     } catch (error) {
// //       console.error('Error saving item:', error);
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await axios.delete(`${BaseURL}/${id}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       setItems((prev) => prev.filter((item) => item.id !== id));
// //     } catch (error) {
// //       console.error('Error deleting item:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Admin Dashboard</h1>
// //       <button onClick={() => openModal()}>Add Item</button>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th style={{ width: 30 }}>N</th>
// //             <th style={{ width: 100 }}>Name</th>
// //             <th style={{ width: 100 }}>Company</th>
// //             <th style={{ width: 100 }}>Location</th>
// //             <th style={{ width: 100 }}>Cost</th>
// //             <th style={{ width: 80 }}>Type</th>
// //             <th style={{ width: 100 }}>Date</th>
// //             <th style={{ width: 50 }}>People</th>
// //             <th style={{ width: 100 }}>Buttons</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item) => (
// //             <tr key={item.id}>
// //               <td>{item.name}</td>
// //               <td>{item.company}</td>
// //               <td>{item.location}</td>
// //               <td>{item.cost}</td>
// //               <td>{item.type}</td>
// //               <td>{item.date}</td>
// //               <td>{item.people}</td>
// //               <td>
// //                 <button onClick={() => openModal(item)}>Edit</button>
// //                 <button onClick={() => handleDelete(item.id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
// //         <ModalForm 
// //           isOpen={isModalOpen} 
// //           onRequestClose={closeModal} 
// //           onSubmit={handleSubmit} 
// //           editData={editData} 
// //         />
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default MotorNew;

