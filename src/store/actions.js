export function updateInputContent(target, content) {
  return {
    type: 'updateInputContent',
    payload: {
      target,
      content,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}
