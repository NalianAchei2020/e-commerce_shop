import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

function Searchbar({ hideSearch }) {
  return (
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
  );
}

export default Searchbar;
