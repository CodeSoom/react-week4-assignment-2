// eslint-disable-next-line import/prefer-default-export
export function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}
