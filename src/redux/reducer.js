const initialState = {
  id: 1,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const operatorOnState = {
    'restaurant/addItem': (oldState) => {
      const { id, restaurants } = oldState;

      return {
        id: id + 1,
        name: '',
        category: '',
        address: '',
        restaurants: [...restaurants, action.payload],
      };
    },

    'restaurant/updateField': (oldState) => {
      const { field, value } = action.payload;

      return {
        ...oldState,
        [field]: value,
      };
    },
  };

  const getNewState = operatorOnState[action.type];
  return getNewState ? getNewState(state) : state;
}
