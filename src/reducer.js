const initialState = {
  id: 100,
  name: '',
  sort: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'ADD_NAME') {
    return ({
      ...state,
      name: action.payload.name,
    }
    );
  }

  if (action.type === 'ADD_SORT') {
    return ({
      ...state,
      sort: action.payload.sort,
    });
  }

  if (action.type === 'ADD_ADDRESS') {
    return ({
      ...state,
      address: action.payload.address,
    });
  }

  if (action.type === 'ADD_RESTAURANT') {
    const {
      id, name, sort, address,
    } = state;
    return ({
      ...state,
      id: id + 1,
      name: '',
      sort: '',
      address: '',
      restaurants: [
        ...state, {
          id, name, sort, address,
        }],
    });
  }
  return state;
}
