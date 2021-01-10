import React, { useState } from "react";

const SearchResults = props => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const highlitedRow = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr
              onClick={highlitedRow}
              className={isHighlighted ? "table-danger" : ""}
            >
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
