const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer({ state = initialState, action }) {
  if (action.type === 'addRestaurant') {
    return {
      ...state,

    };
  }

  return state;
}
