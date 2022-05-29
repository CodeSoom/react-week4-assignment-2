import { changeRestaurantData, addRestaurantData } from './reducerService';

const initialState = {
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const operations = {
  changeRestaurantData: (state, action) => changeRestaurantData(state, action),
  addRestaurantData: (state) => addRestaurantData(state),
};

export default function reducer(state = initialState, action) {
  return operations[action.type]
    ? (operations[action.type](state, action))
    : (state);
}
