import React from 'react';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const Errormessage = ({ error, setAlertError, alertError }) => {
  return (
    <Snackbar
      open={alertError}
      onClose={() => {
        setAlertError(false);
      }}
      autoHideDuration={5000}
    >
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );
};

export default Errormessage;
