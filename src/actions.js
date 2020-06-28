export function updateTitle(title) {
  return {
    type: 'updateTitle',
    payload: {
      title,
    },
  };
}
