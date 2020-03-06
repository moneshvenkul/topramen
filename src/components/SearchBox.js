import React from 'react';

const SearchBox = ({ searchfield, searchChange, sorts, sorts1 }) => {

  return (
    <div className="pa2">
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type="search"
        placeholder="search brands"
        onChange={searchChange}

      />
      <button style={{ margin: 20 }} onClick={sorts}>Sorts by year</button>
      <button onClick={sorts1}>Sorts by Country</button>
    </div>

  );
}

export default SearchBox;
