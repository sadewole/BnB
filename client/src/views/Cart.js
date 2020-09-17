import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/actions/mealAction";

const url = "http://localhost:1337";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const loadItems = (items) => {
    return items.map((item, index) => {
      return (
        <tr className="table-light" key={index}>
          <th scope="row">
            <img
              src={`${url}${item.Image.url}`}
              alt=""
              className="table-image"
            />
          </th>
          <td>{item.Name}</td>
          <td>{item.Description}</td>
          <td>‎₦{item.Price}</td>
        </tr>
      );
    });
  };

  const computePrice =
    cartItems &&
    cartItems.data.reduce((acc, item) => acc + item.Price, 0).toFixed(2);

  return (
    <div className="container">
      <h1 className="primary-font display-3">
        <em>My Cart</em>
      </h1>
      {cartItems && cartItems.data ? (
        <div className="row">
          <div className="col-md-8 col-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{loadItems(cartItems.data)}</tbody>
            </table>
          </div>
          <div className="col-md-4 col-12">
            <h3>Your Total Price : ‎₦{computePrice}</h3>
            <button type="button" className="btn btn-danger my-2">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h4>Your cart is empty</h4>
      )}
    </div>
  );
};

export default Cart;
