import React from 'react';

const SearchBar = ({changeFilterChoice, filterChoice, changeSortChoice, sortChoice}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortChoice === "Alphabetically" ? true : false} onChange={(event) => changeSortChoice(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="year" checked={sortChoice === "year" ? true : false} onChange={(event) => changeSortChoice(event)}/>
        Release Year
      </label>
      <br/>

      <label>
        <strong>Filter by Genre:</strong>
        <select onChange={(event) => changeFilterChoice(event)}>
        <option selected={filterChoice === "None"} value="None">None</option>
          <option selected={filterChoice === "Drama"} value="Drama">Drama</option>
          <option selected={filterChoice === "Crime"} value="Crime">Crime</option>
          <option selected={filterChoice === "Thriller"} value="Thriller">Thriller</option>
          <option selected={filterChoice === "Action"} value="Action">Action</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
