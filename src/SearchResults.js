import React, { useState } from "react";
import SearchResultRow from "./SearchResultRow";

const SearchResults = props => {
  const rows = props.results.map((result, i) => (
    <SearchResultRow
      result={result}
      onShowProfile={props.onShowProfile}
      key={`result-${i}`}
    />
  ));

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
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
