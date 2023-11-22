import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function Message({ message, setMessage }) {
  return (
    <Snackbar
      open={message}
      autoHideDuration={2000}
      onClose={() => {
        setMessage(false);
      }}
    >
      <Alert
        severity="success"
        variant="filled"
        onClose={() => {
          setMessage(false);
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Message;
