import React, { useState, useEffect } from 'react';
import { ModalHead, ModalIn } from './style';

const Modal = ({ visible, onClose, onSubmit, item, editMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    cost: '',
    company: '',
    license:'',
    location: '',
    people: '',
    type: '',
    date: '',
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({
        name: '',
        cost: '',
        company: '',
        license:'',
        location: '',
        people: '',
        type: '',
        date: '',
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!visible) return null;

  return (
    <ModalHead>
      <ModalIn>
        <h2>{editMode ? 'Edit Item' : 'Add Item'}</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map(key => (
            <div key={key}>
              <label>
                {key.charAt(0).toUpperCase() + key.slice(1)}:
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
              </label>
            </div>
          ))}
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </ModalIn>
    </ModalHead>
  );
};

export default Modal;
