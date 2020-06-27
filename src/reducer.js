const initialState = {
  id: 1,
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  reservations: [],
};

function updateRestaurantName(state, action) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: action.payload.restaurant.name,
      category: restaurant.category,
      address: restaurant.address,
    },
  };
}

function updateRestaurantCategory(state, action) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: restaurant.name,
      category: action.payload.restaurant.category,
      address: restaurant.address,
    },
  };
}

function updateRestaurantAddress(state, action) {
  const { restaurant } = state;

  return {
    ...state,
    restaurant: {
      name: restaurant.name,
      category: restaurant.category,
      address: action.payload.restaurant.address,
    },
  };
}

const handleAction = {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
};

export default function reducer(state = initialState, action) {
  return handleAction[action.type] ? handleAction[action.type](state, action) : state;
}
