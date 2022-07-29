const initialState = {
  name: '',
  category: '',
  address: '',
  newId: 0,
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (!action) return state;
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }
  if (['changeName', 'changeCategory', 'changeAddress'].includes(action.type)) {
    return {
      ...state,
      [action.payload.inputName]: action.payload.input,
    };
  }
  if (action.type === 'addRestaurant') {
    return {
      name: '',
      category: '',
      address: '',
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        {
          id: state.newId,
          name: state.name,
          category: state.category,
          address: state.address,
        },
      ],
    };
  }
  return state;
}
