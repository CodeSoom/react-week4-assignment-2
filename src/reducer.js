export const initialState = {
  newId: 0,
  changed: {
    name: '',
    category: '',
    address: '',
  },
  registered: [],
};

export default function reducer(state = initialState, action) {
  switch (action?.type) {
  case 'CHANGE_INPUT':
    return {
      ...state,
      changed: {
        ...state.changed,
        [action.payload.name]: action.payload.value,
      },
    };
  case 'REGISTER_INPUT':
    if (
      !state.changed.name
        || !state.changed.category
        || !state.changed.address
    ) {
      return state;
    }
    return {
      ...state,
      registered: [
        ...state.registered,
        {
          id: state.newId,
          name: state.changed.name,
          category: state.changed.category,
          address: state.changed.address,
        },
      ],
    };
  case 'DELETE_LIST':
    return {
      ...state,
      registered: state.registered.filter(
        (restaurant) => restaurant.id !== action.payload.id,
      ),
    };
  default:
    return state;
  }
}
