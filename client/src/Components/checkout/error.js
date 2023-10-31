import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const Error = ({ error, setError }) => {
  return (
    <Snackbar
      open={error}
      autoHideDuration={5000}
      onClose={() => {
        setError(false);
      }}
    >
      <Alert
        onClose={() => {
          setError(false);
        }}
        severity="error"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Error;
