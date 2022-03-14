export const CHANGE_INPUT = 'changeInput';
export const ADD_NEW_RESTAURANT = 'addNewRestaurant';

export const changeInput = (name, value) => ({ type: CHANGE_INPUT, payload: { name, value } });

export const addNewRestaurant = () => ({ type: ADD_NEW_RESTAURANT });
