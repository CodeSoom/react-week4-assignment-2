const initialState = {
  name: '',
  category: '',
  address: '',
  restaurants: [],
  error: '',
};

function validateValues(values) {
  const keys = Object.getOwnPropertyNames(values);
  const invalidValues = keys.filter((key) => !values[key]);

  return {
    isValid: !invalidValues.length,
    invalidValues,
  };
}

function createInvalidValuesErrorMessage(invalidValues) {
  return `Can not add restaurant. ${invalidValues.join(', ')} ${invalidValues.length > 1 ? 'are' : 'is'} empty.`;
}

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRestaurantInfo') {
    const { infoType, value } = action.payload;
    return {
      ...state,
      [infoType]: value,
    };
  }

  if (action.type === 'addRestaurant') {
    const {
      name, category, address, restaurants,
    } = state;

    const { isValid, invalidValues } = validateValues({ name, category, address });
    if (!isValid) {
      return {
        ...state,
        error: createInvalidValuesErrorMessage(invalidValues),
      };
    }

    return {
      ...state,
      name: '',
      category: '',
      address: '',
      restaurants: [...restaurants, { name, category, address }],
    };
  }

  return state;
}
