export default function updateRestaurant(keyValue, text) {
  return {
    type: 'updateRestaurant',
    payload: { key: keyValue, content: text },
  };
}
