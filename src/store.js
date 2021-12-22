import { createStore } from 'redux';

const initialState = {
  name: '',
  category: '',
  address: '',
  data: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'handleChangeNameValue') {
    return {
      ...state,
      name: action.payload.name,
    };
  }
  if (action.type === 'handleChangeCategroryValue') {
    return {
      ...state,
      category: action.payload.category,
    };
  }
  if (action.type === 'handleChangeAddressValue') {
    return {
      ...state,
      address: action.payload.address,
    };
  }
  if (action.type === 'saveData') {
    console.log(action.payload.data);
    return {
      ...state,
      name: '',
      category: '',
      address: '',
      data: [
        ...state.data,
        action.payload.data,
      ],
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
