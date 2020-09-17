import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid overflow-hidden wh-100 hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 hero-text">
          <h1>Brooks and Blake</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            quo illum repellendus minima voluptates veritatis odit porro
            doloribus ratione incidunt?
          </p>
          <button type="button" class="btn btn-primary btn-lg">
            <Link to="/explore">
              <emp> Order Now!</emp>
            </Link>
          </button>
        </div>
        <div className="col-md-6 col-12 image">
          <img src="./static/landingImg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
