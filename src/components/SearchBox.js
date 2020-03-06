import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input placeholder='Filter Robot'
        type="search"
        className="pa2 ma3 ba3 bg-light-green"
        onChange={searchChange} />
    </div>
  );
}

export default SearchBox;