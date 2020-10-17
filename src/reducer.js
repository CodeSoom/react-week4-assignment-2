const initialState = {
  newId: 1,
  restaurants: [],
  name: '',
  cuisine: '',
  location: '',
};

export default function reducer(state = initialState, action) {
  if (!action || action.type.indexOf('@@') > -1) {
    return state;
  }

  const { newId, restaurants } = state;
  const { type, payload } = action;

  function returnNextState() {
    return {
      changeName: () => ({
        ...state,
        name: payload.name,
      }),
      changeCuisine: () => ({
        ...state,
        cuisine: payload.cuisine,
      }),
      changeLocation: () => ({
        ...state,
        location: payload.location,
      }),
      clickAddRestaurant: () => {
        const {
          name,
          cuisine,
          location,
        } = state;

        return {
          ...state,
          newId: state.id + 1,
          restaurants: [
            ...restaurants,
            {
              id: newId,
              name,
              cuisine,
              location,
            },
          ],
          name: '',
          cuisine: '',
          location: '',
        };
      },
    }[type]();
  }

  return returnNextState();
}
