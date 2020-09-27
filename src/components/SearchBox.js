import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className = 'pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' // creates the search box.
        placeholder='Search Robots'
        onChange={searchChange} // when there is a change on the input, run searchChange. searchChange runs the functions in App.js, which gets the event.target.value of the searchField.
        />
        </div>
        
    );
}

export default SearchBox;