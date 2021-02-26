import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchedProfileId, setSearchedProfileId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  /*useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []); */

  /* useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []); */

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    setBookings(filteredBookings);
  };

  const changeSearchedProfile = newProfile => {
    setSearchedProfileId(newProfile);
  };

  useEffect(() => {
    setLoading(true);
    setFailed(false);

    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new Error(
            `Encountered something unexpected: ${response.status} ${
              response.statusText
            }`
          );
        }
      })
      .then(apiBookings => setBookings(apiBookings))
      .then(() => setLoading(false))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <h2 className="centered">Loading ....</h2>
      ) : failed ? (
        <h2 className="centered">Ops! Something went wrong</h2>
      ) : (
        <div className="container">
          <Search search={search} />
          <SearchResults
            results={bookings}
            onShowProfile={changeSearchedProfile}
          />
          <CustomerProfile id={searchedProfileId} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
