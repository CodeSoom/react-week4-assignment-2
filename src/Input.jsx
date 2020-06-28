import React from 'react';

export default function Input({ inputState, onChange, onClick }) {
    const {name, category, address} = inputState;
    return (
        <p>
            <label htmlFor="input-task-title">
                할 일
            </label>
            <input
                id="input-name"
                type="text"
                placeholder="이름"
                value={name}
                onChange={onChange}
            />
            <input
                id="input-category"
                type="text"
                placeholder="분류"
                value={category}
                onChange={onChange}
            />
            <input
                id="input-address"
                type="text"
                placeholder="주소"
                value={address}
                onChange={onChange}
            />
            <button type="button" onClick={onClick}>
                등록
            </button>
        </p>
    );
}
