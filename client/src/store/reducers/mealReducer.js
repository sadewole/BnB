const initState = {
  meals: [],
  meal: null,
  cartItems: null,
};

export default (state = initState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "FETCH_MEALS": {
      return {
        ...state,
        meals: payload,
      };
    }
    case "FETCH_MEAL": {
      return {
        ...state,
        meal: payload,
      };
    }
    case "FETCH_CART": {
      return {
        ...state,
        cartItems: payload,
      };
    }
    default:
      return state;
  }
};
