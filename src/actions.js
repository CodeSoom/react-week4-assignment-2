export function updateListTitle(listTitle) {
  return {
    type: 'updateListTitle',
    payload: {
      listTitle,
    },
  };
}

export function updateListMenu(listMenu) {
  return {
    type: 'updateListMenu',
    payload: {
      listMenu,
    },
  };
}

export function updateListAddress(listAddress) {
  return {
    type: 'updateListAddress',
    payload: {
      listAddress,
    },
  };
}

export function updateReservation() {
  return {
    type: 'updateReservation',
  };
}
