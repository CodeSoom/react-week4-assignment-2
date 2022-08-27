import { v4 as uuidv4 } from 'uuid';

const initialState = {
  information: {
    name: '',
    classification: '',
    address: '',
  },
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateInformation') {
    const { information } = state;

    const { category, content } = action.payload;

    return {
      ...state,
      information: {
        ...information,
        [category]: content,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { information, restaurants } = state;

    // eslint-disable-next-line no-restricted-syntax
    for (const category in information) {
      if (!information[category]) return state;
    }

    const { name, classification, address } = information;

    return {
      information: {
        name: '',
        classification: '',
        address: '',
      },
      restaurants: [
        ...restaurants,
        {
          id: uuidv4(),
          name,
          classification,
          address,
        },
      ],
    };
  }

  return state;
}
