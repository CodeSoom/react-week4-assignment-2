export function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

export function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: {
      category,
    },
  };
}
