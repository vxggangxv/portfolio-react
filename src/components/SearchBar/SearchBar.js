import React, { useState } from 'react';
import './SearchBar.scss';
import { useDispatch } from 'react-redux';
import { searchByStack } from 'store/project';

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [stack, setStack] = useState('');
  const dispatch = useDispatch();

  const onSearch = () => {
    dispatch(searchByStack(stack));
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <>
      <div className="search-bar">
        <div className="input-cover">
          <i
            className={`mdi mdi-magnify ${isFocus ? 'active' : ''}`}
            onClick={onSearch}
          ></i>
          <input
            type="text"
            className="form-input search"
            placeholder="Search Stack"
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onKeyPress={onEnter}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
