import React from "react";
import MealCatalog from "../components/MealCatalog";

const ExploreMeal = () => {
  return (
    <div>
      <div className="m-3">
        <h1 className="text-capitalize primary-font text-center">
          Explore Meal on our Catalog
        </h1>

        <section className="container card p-2 meals-box">
          <MealCatalog />
        </section>
      </div>
    </div>
  );
};

export default ExploreMeal;
