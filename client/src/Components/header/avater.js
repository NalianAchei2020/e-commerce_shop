import React from 'react';
import { Stack, Avatar, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';

function Avater() {
  const { username } = useSelector((state) => state.product);
  const name = username.split('')[0].toUpperCase();

  return (
    <section>
      <Stack spacing={2} direction="row">
        <Tooltip title="Profile" placement="bottom">
          <Avatar
            sx={{
              backgroundColor: 'primary.light',
              fontSize: '1.2rem',
            }}
          >
            {name}
          </Avatar>
        </Tooltip>
      </Stack>
    </section>
  );
}

export default Avater;
