const initialState = {
  id: 1,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const getOpeator = {
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

  return getOpeator[action.type](state);
}
