// import restaurants from '../fixtures/restaurants';

const initailState = {
  restaurants: [],
};

export default function reducer(state = initailState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  return state;
}
