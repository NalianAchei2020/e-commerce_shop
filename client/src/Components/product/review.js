import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Rating from '@mui/material/Rating';

const Review = () => {
  const [message, setMessage] = useState('');
  const form = useForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const handleSumit2 = (data, e) => {
    e.preventDefault();
    if (data) {
      setMessage('Thank you for your review');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
    reset();
  };

  return (
    <div className="mt-3">
      {message && <Alert severity="success">{message}</Alert>}
      <form onSubmit={handleSubmit(handleSumit2)}>
        <div className="d-flex flex-column flex-md-row justify-content-between mt-5">
          <div>
            <div>
              <h6>Name</h6>
              <TextField
                label="Enter your name"
                variant="outlined"
                type="text"
                name="name"
                sx={{ width: '100%' }}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
              />
              {errors.name && (
                <Alert severity="error" sx={{ marginTop: '5px' }}>
                  {errors.name.message}
                </Alert>
              )}
            </div>
            <br />
            <div>
              <h6>Email</h6>
              <TextField
                label="join.smith@example.com"
                variant="outlined"
                type="text"
                name="email"
                sx={{ width: '100%' }}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Eamil is required',
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Email is invalid',
                  },
                  validate: (fieldValue) => {
                    return (
                      fieldValue !== 'admin@gmail.com' ||
                      'Enter a different email '
                    );
                  },
                })}
              />
              {errors.email && (
                <Alert severity="error" sx={{ marginTop: '5px' }}>
                  {errors.email.message}
                </Alert>
              )}
            </div>
            <br />
          </div>
          <div>
            <div>
              <h6>Review Title</h6>
              <TextField
                label="Give your review a title"
                variant="outlined"
                type="text"
                name="title"
                sx={{ width: '100%' }}
                {...register('title', {
                  required: {
                    value: true,
                    message: 'Review title is required',
                  },
                })}
              />

              {errors.title && (
                <Alert severity="error" sx={{ marginTop: '5px' }}>
                  {errors.title.message}
                </Alert>
              )}
            </div>
            <br />
            <div>
              <h6>Rating</h6>
              <Rating
                name="half-rating"
                defaultValue={0}
                precision={0.5}
                size="large"
              />
            </div>
          </div>
        </div>
        <div>
          <h6>Body of Review</h6>
          <TextField
            variant="outlined"
            type="text"
            name="comment"
            label="Write your comment here"
            multiline
            rows={5}
            sx={{ width: '100%' }}
            {...register('description', {
              required: {
                value: true,
                message: 'Description is required',
              },
            })}
          />
          {errors.description && (
            <Alert severity="error" sx={{ marginTop: '5px' }}>
              {errors.description.message}
            </Alert>
          )}
        </div>
        <br />
        <div>
          <button className="btn-best btn-review">Submit Review</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
