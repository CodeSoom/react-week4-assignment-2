export function updateRestuarantName(restuarantName) {
  return {
    type: 'updateRestuarantName',
    payload: { restuarantName },
  };
}

export function updateRestuarantCategory(restuarantCategory) {
  return {
    type: 'updateRestuarantCategory',
    payload: { restuarantCategory },
  };
}

export function updateRestuarantAddress(restuarantAddress) {
  return {
    type: 'updateRestuarantAddress',
    payload: { restuarantAddress },
  };
}
