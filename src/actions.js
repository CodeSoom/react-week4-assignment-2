export function updateInformations(target, value) {
  return {
    type: 'updateInformations',
    payload: {
      target,
      value,
    },
  };
}
