export function updateInputContent(type, content) {
  return {
    type: 'updateInputContent',
    payload: {
      type,
      content,
    },
  };
}

export function addRestaurant() {}
