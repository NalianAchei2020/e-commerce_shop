import React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <section className="searchBar">
      <TextField
        type="text"
        placeholder="Search"
        InputProps={{
          endAdornment: <SearchIcon className="search" />,
        }}
        className="searchInput"
      />
      <ul>
        <li className="quick">Quick Search:</li>
        <li>High Heels,</li>
        <li>Boots,</li>
        <li>Sneakers,</li>
        <li>Sandals</li>
      </ul>
    </section>
  );
}

export default Searchbar;
