import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        list={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
