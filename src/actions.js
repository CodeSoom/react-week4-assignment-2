export function updateInformation(category, content) {
  return {
    type: 'updateInformation',
    payload: {
      category,
      content,
    },
  };
}
