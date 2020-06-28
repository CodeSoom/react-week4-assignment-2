import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
    updateTaskTitle, addTask,
} from './action';

export default function InputContainer() {
    const inputState = useSelector(state);

    const dispatch = useDispatch();

    function handleChangeInfo(event) {
        dispatch(updateRestaurantInfo(event.target.value));
    }

    function handleClickAddRestaurant() {
        dispatch(addRestaurant());
    }

    return (
        <Input
            inputState={inputState}
            onChange={handleChangeInfo}
            onClick={handleClickAddRestaurant}
        />
    );
}
