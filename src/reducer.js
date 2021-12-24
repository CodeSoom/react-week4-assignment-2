const initialState = {
  changed: {
    name: "",
    type: "",
    address: "",
  },
  registered: [
    {
      name: "마녀피자",
      type: "양식",
      address: "서울시 강남구",
    },
    {
      name: "모던한식",
      type: "한식",
      address: "부산시 해운대구",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        changed: {
          ...state.changed,
          name: action.payload,
        },
      };
    case "REGISTER_INPUT":
      return {
        ...state,
        registered: [
          ...state.registered,
          {
            name: state.changed.name,
            type: state.changed.type,
            address: state.changed.address,
          },
        ],
      };
    default:
      return state;
  }
}
