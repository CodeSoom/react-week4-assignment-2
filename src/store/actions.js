export function updateInputContent({ targetType, content }) {
  return {
    type: 'updateInputContent',
    payload: {
      targetType,
      content,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
