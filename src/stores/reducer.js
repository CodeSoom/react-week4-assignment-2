import { UPDATE_RESTAURANT_INFO, ADD_RESTAURANT } from './action/action-types';

const ReducerRouter = {
  [UPDATE_RESTAURANT_INFO]: (previousState, payload) => {
    const { restaurant } = previousState;
    const { property, value } = payload;
    return {
      ...previousState,
      restaurant: {
        ...restaurant,
        [property]: value,
      },
    };
  },

  [ADD_RESTAURANT]: (previousState) => {
    const { restaurants, restaurant } = previousState;

    if (!restaurant) {
      return previousState;
    }

    if (!restaurant.name || !restaurant.category || !restaurant.address) {
      return previousState;
    }

    return {
      ...previousState,
      restaurants: [...restaurants, restaurant],
      restaurant: {
        id: restaurant.id + 1,
        name: '',
        category: '',
        address: '',
      },
    };
  },
};

const initialState = {
  restaurants: [],
  restaurant: {
    id: 0,
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(previousState = initialState, action) {
  const { type, payload } = action;
  const actionHandler = ReducerRouter[type];
  if (actionHandler) {
    return actionHandler(previousState, payload);
  }
  return previousState;
}
