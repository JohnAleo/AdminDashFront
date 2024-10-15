import React, { useState, useEffect } from 'react';
import Modal from './modal';
import { EngineWrapper, HeaderWrapper, Table, TableData, TableHead, TR } from './style';
import { BaseURL } from '../../config';

const MotorComponent = () => {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const token = localStorage.getItem("token");
  const [loading, setLoading]= useState(true)

  // Fetch data (mocked for this example)
  useEffect(() => {
    const fetchData = async () => {
      // Replace with your API call
      try {
        const response = await fetch(BaseURL, {
          headers: {
            'Authorization': `Bearer ${token}`, // Replace with your token
          },
        }); 
        if (!response.ok){
          throw new Error('Error fetching Motor Data')
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error)
      } finally{
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  const handleAdd = () => {
    setCurrentItem(null);
    setEditMode(false);
    setModalVisible(true);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setEditMode(true);
    setModalVisible(true);
  };

  const handleDelete = async (id) => {
    // Replace with your delete API call
    await fetch(`http://localhost:7070/api/data/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    setData(data.filter(item => item.id !== id));
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setCurrentItem(null);
  };

  const handleModalSubmit = async (item) => {
    if (editMode) {
      // Update item API call
      await fetch(`http://localhost:7070/api/data/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });
      setData(data.map(d => (d.id === item.id ? item : d)));
    } else {
      // Add item API call
      const response = await fetch('http://localhost:7070/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(item),
      });
      const newItem = await response.json();
      setData([...data, newItem]);
    }
    handleModalClose();
  };

  return (
    <EngineWrapper>
      <HeaderWrapper>
        <h2>Motor</h2>
        <button onClick={handleAdd}>Add</button>
      </HeaderWrapper>
      <table>
        <thead >
          <tr style={{display:'flex',justifyContent:'center'}}>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Name</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Cost</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Company</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Licence</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Location</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>People</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Type</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Date</th>
            <th style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>Actions</th>
          </tr>
        </thead>
        <tbody >
          {data.map(item => (
            <tr key={item.id} style={{display:'flex', justifyContent:'center',width:'100%'}}>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.name}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.cost}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.company}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.license}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.location}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.people}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.type}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>{item.date}</td>
              <td style={{display:'flex',border:'1px solid #ccc',padding:'10px',textAlign:'left',width:'100px'}}>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          item={currentItem}
          editMode={editMode}
        />
      )}
    </EngineWrapper>
  );
};

export default MotorComponent;
