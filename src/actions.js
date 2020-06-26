export const addRestaurant = (input) => ({
  type: 'addRestaurant',
  payload: {
    input
  }
});

export const updateInput = ({key, value}) => ({
  type: 'updateInput',
  payload: {
    key,value
  }
})