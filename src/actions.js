export function updateInformation({ name, value }) {
  return {
    type: 'updateInformation',
    payload: { name, value },
  };
}

export function addInformation({ nameTitle, classification, location }) {
  return {
    type: 'addInformation',
    payload: { nameTitle, classification, location },
  };
}

export function initializeInformation() {
  return {
    type: 'initializeInformation',
  };
}
