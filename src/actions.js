export default function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}
