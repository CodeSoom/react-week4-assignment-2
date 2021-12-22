export function updateNameValue(name) {
  return {
    type: 'handleChangeNameValue',
    payload: {
      name,
    },
  };
}

export function updateCategoryValue(category) {
  return {
    type: 'handleChangeCategroryValue',
    payload: {
      category,
    },
  };
}

export function updateAddressValue(address) {
  return {
    type: 'handleChangeAddressValue',
    payload: {
      address,
    },
  };
}

export function updateData(name, category, address) {
  return {
    type: 'saveData',
    payload: {
      data: { name, category, address },
    },
  };
}
