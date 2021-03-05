import React from "react";
import Icon from "../assets/cup-cake.png";

const Banner = () => {
  return (
    <div className="container">
      <header style={{ marginTop: "70px" }}>
        <div className="headerText">
          <div>
            <h1>
              Maya Cokes <img src={Icon} />
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
