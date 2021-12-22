export const updateRestaurantInfo = (key, value) => ({
  type: "updateRestautrantInfo",
  payload: {
    key,
    value,
  },
});
