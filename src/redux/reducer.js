export const initialState = {
  newRestaurant: {
    id: 1,
    name: '',
    category: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const operatorOnState = {
    'restaurant/addItem': (oldState) => {
      const { newRestaurant: { id }, restaurants } = oldState;

      return {
        newRestaurant: {
          id: id + 1,
          name: '',
          category: '',
          address: '',
        },
        restaurants: [...restaurants, action.payload],
      };
    },

    'restaurant/updateField': (oldState) => {
      const { field, value } = action.payload;
      const { newRestaurant } = oldState;

      return {
        ...oldState,
        newRestaurant: {
          ...newRestaurant,
          [field]: value,
        },
      };
    },
  };

  const getNewState = operatorOnState[action.type];
  return getNewState ? getNewState(state) : state;
}
