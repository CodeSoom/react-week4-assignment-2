export function updateInformation({ name, value }) {
  return {
    type: 'updateInformation',
    payload: { name, value },
  };
}

export function addInformation({ name, category, address }) {
  return {
    type: 'addInformation',
    payload: { name, category, address },
  };
}

export function initializeInformation() {
  return {
    type: 'initializeInformation',
  };
}
