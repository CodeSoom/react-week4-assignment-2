const reducers = {
  updateInputContent: (state, action) => ({
    ...state,
    [action.payload.type]: action.payload.content,
  }),
};

export default reducers;
