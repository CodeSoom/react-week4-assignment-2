const initialState = {
  newId: 0,
  changed: {
    name: "",
    type: "",
    address: "",
  },
  registered: [],
};

export default function reducer(state = initialState, action) {
  switch (action?.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        newId: state.newId + 1,
        changed: {
          ...state.changed,
          [action.payload.indexname]: action.payload.value,
        },
      };
    case "REGISTER_INPUT":
      const { name, type, address } = state.changed;
      if (!name || !type || !address) {
        return state;
      }
      return {
        ...state,
        registered: [
          ...state.registered,
          {
            id: state.newId,
            name: name,
            type: type,
            address: address,
          },
        ],
      };
    case "DELETE_LIST":
      return {
        ...state,
        registered: state.registered.filter(
          (restaurant) => restaurant.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
