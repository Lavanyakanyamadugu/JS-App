import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function App() {

  const [formData, setFormData] = useState({
    name: '',
    dob: '', 
    email: '',
    contact: '',
    about: ''
  });

  const [error, setError] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const validate = () => {
    let temp = {...error};
    temp.name = formData.name ? '' : 'Name is required';
    temp.dob = formData.dob ? '' : 'DOB is required';

    // Add other field validation

    setError({...temp});
    return Object.values(temp).every(x => x === "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(validate()){
      // Submit form if validation passes
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label="Name"
        name="name" 
        value={formData.name}
        onChange={handleChange}
        error={error.name}
        helperText={error.name} 
      />

      <TextField
        label="DOB"
        name="dob"
        value={formData.dob} 
        onChange={handleChange}
        error={error.dob}
        helperText={error.dob}
      />

      <Button type="submit">Submit</Button>
    </form>
  )

}