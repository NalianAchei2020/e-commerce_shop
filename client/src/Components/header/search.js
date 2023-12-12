import React, { useState } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { Box, Drawer } from '@mui/material';
import { handleQuery } from '../../redux/productSlice';
import { useNavigate } from 'react-router-dom';

function Searchbar({ hideSearch, showSearchbar }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    handleQuery(searchQuery);
    navigate(`/search?q=${searchQuery}`);
    hideSearch();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const linkClick = (value) => {
    setSearchQuery(value);
    handleSearch();
  };
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
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{
                endAdornment: (
                  <SearchIcon className="search" onClick={handleSearch} />
                ),
              }}
              className="searchInput"
              sx={{ width: '100%' }}
            />
            <ul className="search-list">
              <li className="quick">Quick Search:</li>
              <li
                className="search-items"
                onClick={() => linkClick('High Heels')}
              >
                High Heels,
              </li>
              <li className="search-items" onClick={() => linkClick('Boots')}>
                Boots,
              </li>
              <li
                className="search-items"
                onClick={() => linkClick('Sneakers')}
              >
                Sneakers,
              </li>
              <li className="search-items" onClick={() => linkClick('Sandals')}>
                Sandals
              </li>
            </ul>
          </div>
        </section>
      </Box>
    </Drawer>
  );
}

export default Searchbar;
