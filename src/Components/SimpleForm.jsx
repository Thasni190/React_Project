import React, { useState } from 'react';

function SimpleForm() {
  const initialFormData = { name: '', email: '' };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </form>
  );
}

export default SimpleForm;
