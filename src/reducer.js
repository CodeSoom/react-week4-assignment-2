export const initialState = {
  restaurantInfo: {
    name: '',
    category: '',
    address: '',
  },
  restaurantInfoList: [],
};

export default function reducer(state = initialState, action) {
  const router = {
    updateRestaurantInfo: () => ({
      ...state,
      restaurantInfo: {
        ...state.restaurantInfo,
        [action.payload.type]: action.payload.value,
      },
    }),
    addRestaurantInfo: () => ({
      ...state,
      restaurantInfo: {
        name: '',
        category: '',
        address: '',
      },
      restaurantInfoList: [
        ...state.restaurantInfoList,
        action.payload,
      ],
    }),
  };

  return (router[action.type] || (() => state))();
}
