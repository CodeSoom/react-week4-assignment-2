import { ADD_RESTAURANT, UPDATE_RESTAURANTINFO } from './actions';

const initialState = {
  restaurantList: [],
  restaurantInfo: {
    id: 0, name: '', category: '', address: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === UPDATE_RESTAURANTINFO) {
    return { ...state, restaurantInfo: { ...state.restaurantInfo, ...action.payload } };
  }
  if (action.type === ADD_RESTAURANT) {
    const { restaurantList, restaurantInfo } = state;
    return {
      ...state,
      restaurantList: [{
        id: 1,
        name: '선정릉역 깐부치킨',
        catagory: '한식',
        address: '서울 강남구 삼성동 37 깐부치킨 선정릉역점',
      }],
    };
  }
  return state;
}
