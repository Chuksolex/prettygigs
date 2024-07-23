import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const JobApplicationForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('cv', data.cv[0]);

    try {
      const response = await axios.post('/api/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      reset();
      alert('Application submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit application');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>CV</label>
        <input type="file" {...register('cv', { required: true })} />
      </div>
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
