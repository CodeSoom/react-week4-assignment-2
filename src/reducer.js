export const initialState = {
  restaurantInfo: {
    name: '',
    type: '',
    location: '',
  },
  listRestaurantInfo: [],
};

export default function reducer(state = initialState, action) {
  const router = {
    updateRestaurantName: {
      ...state,
      restaurantInfo: {
        name: action.payload,
      },
    },
    updateRestaurantType: {
      ...state,
      restaurantInfo: {
        type: action.payload,
      },
    },
    updateRestaurantLocation: {
      ...state,
      restaurantInfo: {
        location: action.payload,
      },
    },
    addRestaurantInfo: {
      ...state,
      restaurantInfo: {
        name: '',
        type: '',
        location: '',
      },
      listRestaurantInfo: [
        ...state.listRestaurantInfo,
        action.payload,
      ],
    },
  };

  return router[action.type];
}
