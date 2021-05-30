// import restaurants from '../fixtures/restaurants';

const initailState = {
  restaurants: [],
};

export default function reducer(state = initailState, action) {
  if (action === 'setRestaurants') {
    const { restaurants } = state;

    return {
      ...state,
      restaurants,
    };
  }
  return state;
}
