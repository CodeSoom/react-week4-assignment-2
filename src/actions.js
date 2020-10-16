export function updateInformation({ name, value }) {
  return {
    type: 'updateInformation',
    payload: { name, value },
  };
}

export function addInformation({
  newId, nameTitle, classification, location,
}) {
  return {
    type: 'addInformation',
    payload: {
      newId, nameTitle, classification, location,
    },

  };
}

export function initializeInformation() {
  return {
    type: 'initializeInformation',
  };
}
