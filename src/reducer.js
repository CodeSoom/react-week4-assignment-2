const initialState = {
  newId: 0,
  changed: {
    name: "",
    type: "",
    address: "",
  },
  registered: [
    {
      id: 1,
      name: "마녀피자",
      type: "양식",
      address: "서울시 강남구",
    },
    {
      id: 2,
      name: "모던한식",
      type: "한식",
      address: "부산시 해운대구",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action?.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        newId: state.newId + 1,
        changed: {
          ...state.changed,
          [action.payload.indexName]: action.payload.value,
        },
      };
    case "REGISTER_INPUT":
      return {
        ...state,
        registered: [
          ...state.registered,
          {
            id: state.newId,
            name: state.changed.name,
            type: state.changed.type,
            address: state.changed.address,
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
