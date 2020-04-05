import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <div className="input-cover">
          <i className="mdi mdi-magnify"></i>
          <input
            type="text"
            className="form-input search"
            placeholder="Search Stack"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
