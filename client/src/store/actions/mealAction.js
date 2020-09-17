import axios from "axios";

const url = "http://localhost:1337/";

export const fetchAllMeal = () => async (dispatch) => {
  try {
    const res = await axios.get(`${url}meals`);

    dispatch({
      type: "FETCH_MEALS",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchOneMeal = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${url}meals/${id}`);

    dispatch({
      type: "FETCH_MEAL",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = (item) => (dispatch) => {
  let getCart = localStorage.getItem("cart");
  if (!getCart) {
    getCart = [];
    getCart.push(item);
    localStorage.setItem("cart", JSON.stringify(getCart));
  } else {
    getCart = JSON.parse(getCart);
    getCart.push(item);
    localStorage.setItem("cart", JSON.stringify(getCart));
  }
};

export const fetchCart = () => {
  let res = {};
  let getCart = localStorage.getItem("cart");

  if (!getCart) {
    res.message = "Cart is empty";
  } else {
    res.data = JSON.parse(getCart);
    res.message = "Fetch successfully";
  }

  return function (dispatch) {
    dispatch({
      type: "FETCH_CART",
      payload: res,
    });
  };
};
