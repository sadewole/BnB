import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeal } from "../store/actions/mealAction";

const url = "http://localhost:1337";

const MealCatalog = () => {
  const { meals } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMeal());
  }, []);

  return (
    <section className="row">
      {meals &&
        meals.map((item) => {
          return (
            <div
              className="card m-2 col-12 col-md-6 col-lg-4 col-xl-3 card-hover"
              key={item.id}
            >
              <Link to={`/meal-details/${item.id}`}>
                <img
                  style={{ height: "250px", width: "100%", display: "block" }}
                  src={`${url}${item.Image[0].url}`}
                  alt="Card image"
                />
                <div className="card-body primary-font">
                  <h5>{item.Name}</h5>
                  <span
                    className={`badge badge-pill ${
                      item.Available ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {item.Available ? "Available" : "Sold Out"}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
    </section>
  );
};

export default MealCatalog;
