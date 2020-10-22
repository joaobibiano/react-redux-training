const initialState = {
  // { id: 1, name: 'Mouse', totalPrice: 2 }
  products: [],
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default checkoutReducer;
