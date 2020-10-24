import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
