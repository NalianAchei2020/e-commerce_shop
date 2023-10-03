import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { Box, Drawer } from '@mui/material';

function Searchbar({ hideSearch, showSearchbar }) {
  return (
    <Drawer anchor="top" open={showSearchbar} onClose={hideSearch}>
      <Box spacing={2} role="presentation">
        <section className="searchBar">
          <div className="search-back">
            <IconButton onClick={hideSearch}>
              <ArrowBackIcon />
            </IconButton>
          </div>

          <div>
            <TextField
              type="text"
              placeholder="Search"
              InputProps={{
                endAdornment: <SearchIcon className="search" />,
              }}
              className="searchInput"
              sx={{ width: '100%' }}
            />
            <ul className="search-list">
              <li className="quick">Quick Search:</li>
              <li>High Heels,</li>
              <li>Boots,</li>
              <li>Sneakers,</li>
              <li>Sandals</li>
            </ul>
          </div>
        </section>
      </Box>
    </Drawer>
  );
}

export default Searchbar;
