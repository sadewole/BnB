import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneMeal, addToCart } from "../store/actions/mealAction";
import { currencyFormatter } from "../utils/formatter";

const url = "http://localhost:1337";

const MealDetails = () => {
  const [pop, setPop] = useState(false);
  const { meal } = useSelector((state) => state.meals);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneMeal(id));

    let alertPop = setInterval(function () {
      if (pop) {
        setPop(false);

        clearInterval(alertPop);
      }
    }, 3000);
  }, [pop]);

  const loadImages = (imgs) => {
    return imgs.map((img, index) => {
      return (
        <div className="meal-order" key={index}>
          <img src={`${url}${img.url}`} alt="" className="" />
        </div>
      );
    });
  };

  const alert = () => {
    setPop(true);
  };

  const handleAdd = (item) => {
    dispatch(addToCart(item));
    alert();
  };

  const loadItems = (meal) => {
    return meal.items.map((item) => {
      return (
        <tr className="table-light" key={item.id}>
          <th scope="row">
            <img
              src={`${url}${item.Image.url}`}
              alt=""
              className="table-image"
            />
          </th>
          <td>{item.Name}</td>
          <td>{item.Description}</td>
          <td>{currencyFormatter(item.Price)}</td>
          <td onClick={() => handleAdd(item)}>
            <i
              className={`fas fa-plus-circle fa-2x add ${
                !meal.Available && "disabled"
              }`}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="container details my-5">
      <div
        className={`alert alert-dismissible alert-secondary alert-top ${
          pop ? "show" : ""
        }`}
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={() => setPop(false)}
        >
          &times;
        </button>
        <strong>Well done!</strong> Successfully add to cart!
      </div>
      {meal ? (
        <>
          <div className="card p-3">
            <div className="row">
              <div className="card-grid col-md-6 col-12">
                {loadImages(meal.Image)}
              </div>
              <div className="col-md-6 col-12 mt-5">
                <div className="card-header">
                  <h1>{meal.Name}</h1>
                </div>
                <p>{meal.Description}</p>
                <div className="d-flex justify-content-between">
                  <p>
                    Time to prepare:{" "}
                    <span className="badge badge-info">
                      {meal.TimeToPrepare}
                    </span>
                  </p>
                  <span
                    className={`badge badge-pill ${
                      meal.Available ? "badge-success" : "badge-warning"
                    }`}
                  >
                    {meal.Available ? "Available" : "Sold Out"}
                  </span>
                </div>

                <h5>
                  Chef: {meal.created_by.firstname} {meal.created_by.lastname}
                </h5>
              </div>
            </div>
          </div>
          <div>
            <h3>Place Order</h3>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>{loadItems(meal)}</tbody>
            </table>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MealDetails;
