import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Upload() {
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  const [imageString, setImageString] = useState('');

  const handleUpload = async (data) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageString(reader.result);
      };
      reader.readAsDataURL(data.image[0]);
      const formData = { ...data, image: imageString };

      const response = await axios.post(
        'http://localhost:8000/api/products',
        formData
      );
      const result = response.data;
      console.log(result);
      console.log(formData);
    } catch (error) {
      throw new Error(error);
    }
    console.log(imageString);
  };
  const formData = watch(); // Get all form data
  const bestSellerChecked = formData.bestSeller; // Get the value of the 'bestSeller' checkbox
  const newArrivalChecked = formData.newArrival; // Get the value of the 'newArrival' checkbox
  const trendingChecked = formData.trending;
  // Custom validation rule to check if at least one checkbox is checked
  const validateCheckbox = () => {
    const isBestSellerChecked = !!bestSellerChecked;
    const isNewArrivalChecked = !!newArrivalChecked;
    const isTrendingChecked = !!trendingChecked;

    if (!isBestSellerChecked && !isNewArrivalChecked && !isTrendingChecked) {
      // If none of the checkboxes are checked, return the error message
      return 'Please select at least one checkbox';
    }

    return true; // At least one checkbox is checked, return true to indicate validation passed
  };
  return (
    <section className="container">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <TextField
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
              />
              {errors.name && (
                <Alert severity="error">{errors.name.message}</Alert>
              )}
              <TextField
                label="Brand"
                variant="outlined"
                type="text"
                name="brand"
                {...register('brand', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                })}
              />
              {errors.brand && (
                <Alert severity="error">{errors.brand.message}</Alert>
              )}
              <TextField
                label="Category"
                variant="outlined"
                type="text"
                name="category"
                {...register('category', {
                  required: {
                    value: true,
                    message: 'Category is required',
                  },
                })}
              />
              {errors.category && (
                <Alert severity="error">{errors.category.message}</Alert>
              )}
              <TextField
                label="Subcategory"
                variant="outlined"
                type="text"
                name="subcategory"
                {...register('subcategory', {
                  required: {
                    value: true,
                    message: 'Subcategory is required',
                  },
                })}
              />
              {errors.subcategory && (
                <Alert severity="error">{errors.subcategory.message}</Alert>
              )}
              <TextField
                label="CountInStock"
                variant="outlined"
                type="number"
                name="countInStock"
                {...register('countInStock', {
                  required: {
                    value: true,
                    message: 'CountInStock is required',
                  },
                })}
              />
              {errors.countInStock && (
                <Alert severity="error">{errors.countInStock.message}</Alert>
              )}
              <TextField
                label="Rating"
                variant="outlined"
                type="number"
                name="rating"
                {...register('rating', {
                  required: {
                    value: true,
                    message: 'Rating is required',
                  },
                })}
              />
              {errors.rating && (
                <Alert severity="error">{errors.rating.message}</Alert>
              )}
              <TextField
                label=" Price"
                variant="outlined"
                type="number"
                name=" price"
                {...register('price', {
                  required: {
                    value: true,
                    message: 'Price is required',
                  },
                })}
              />
              {errors.price && (
                <Alert severity="error">{errors.price.message}</Alert>
              )}
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <TextField
                label="Number of Review"
                variant="outlined"
                type="number"
                name="numReview"
                {...register('numReview', {
                  required: {
                    value: true,
                    message: 'Number of Review is required',
                  },
                })}
              />
              {errors.numReview && (
                <Alert severity="error">{errors.numReview.message}</Alert>
              )}
              <TextField
                variant="outlined"
                type="file"
                name="image"
                {...register('image', {
                  required: {
                    value: true,
                    message: 'Image is required',
                  },
                })}
              />
              {errors.image && (
                <Alert severity="error">{errors.image.message}</Alert>
              )}
              <TextField
                variant="outlined"
                type="text"
                name="description"
                label="Description"
                multiline
                rows={5}
                {...register('description', {
                  required: {
                    value: true,
                    message: 'Description is required',
                  },
                })}
              />
              {errors.description && (
                <Alert severity="error">{errors.description.message}</Alert>
              )}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Best Seller"
                  {...register('bestSeller', {
                    validate: validateCheckbox,
                  })}
                />
                {errors.bestSeller && (
                  <Alert severity="error">{errors.bestSeller.message}</Alert>
                )}
                <FormControlLabel
                  control={<Checkbox />}
                  label="New Arrivals"
                  {...register(' newArrival', {
                    validate: validateCheckbox,
                  })}
                />
                {errors.newArrival && (
                  <Alert severity="error">{errors.newArrival.message}</Alert>
                )}
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Trending"
                  {...register(' trending', {
                    validate: validateCheckbox,
                  })}
                />
                {errors.trending && (
                  <Alert severity="error">{errors.trending.message}</Alert>
                )}
              </FormGroup>
            </Stack>
            <Button
              variant="contained"
              type="button"
              className="btn-slider"
              onClick={handleSubmit(handleUpload)}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default Upload;
