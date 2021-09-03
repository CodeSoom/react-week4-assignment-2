const initialState = {
  restuarantName: '',
  restuarantCategory: '',
  restuarantAddress: '',
};

const reducers = {
  updateRestuarantName: (state, { payload }) => ({
    ...state,
    restuarantName: payload.restuarantName,
  }),
  updateRestuarantCategory: (state, { payload }) => ({
    ...state,
    restuarantCategory: payload.restuarantCategory,
  }),
  updateRestuarantAddress: (state, { payload }) => ({
    ...state,
    restuarantAddress: payload.restuarantAddress,
  }),
};

export default function reducer(state = initialState, action) {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
}
