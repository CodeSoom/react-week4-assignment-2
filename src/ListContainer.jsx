import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import List from './List';

import {
    deleteTask,
} from './action';

export default function ListContainer() {
    // 1. 화면에 그리기 위해서 store에서 ★상태를 가져오는 과정
    const { restaurants } = useSelector((state) => ({
        restaurants: state.restaurants,
    }));

    return (
        <List
            restaurants={restaurants}
        />
    );
}
