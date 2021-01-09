import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="App-content">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src={
                  "https://c.files.bbci.co.uk/7AED/production/_108996413_gettyimages-943104890.jpg"
                }
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://peoplemakeglasgow.com"
                  className="btn btn-primary"
                >
                  Glasgow
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={
                  "https://www.centreforcities.org/wp-content/uploads/2014/08/Manchester_x1650-1630x899.jpg"
                }
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://visitmanchester.com"
                  className="btn btn-primary"
                >
                  Manchester
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src={
                  "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
                }
                className="card-img-top"
              />
              <div className="card-body">
                <a
                  target="_blank"
                  href="https://visitlondon.com"
                  className="btn btn-primary"
                >
                  London
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
