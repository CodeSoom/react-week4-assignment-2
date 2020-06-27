import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('should get input', () => {
    const { getByDisplayValue, getByPlaceholderText } = render((
      <div>
        <input
          id="input-registration-name"
          type="text"
          placeholder="이름"
          value="Seoul Pizza"
          onChange={handleChange}
        />
        <input
          id="input-registration-type"
          type="text"
          placeholder="분류"
          value="Western"
          onChange={handleChange}
        />
        <input
          id="input-registration-address"
          type="text"
          placeholder="주소"
          value="Seoul Itaewon"
          onChange={handleChange}
        />
      </div>
    ));

    expect(getByDisplayValue('Seoul Pizza')).not.toBeNull();
    expect(getByDisplayValue('Western')).not.toBeNull();
    expect(getByDisplayValue('Seoul Itaewon')).not.toBeNull();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀주방' },
    });

    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: '양식' },
    });

    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: '이태원' },
    });

    expect(handleChange).toBeCalled();
  });

  it('should be clicked for adding', () => {
    const { getByText } = render((
      <div>
        <input
          id="input-registration-name"
          type="text"
          placeholder="이름"
          value="Seoul Pizza"
          onChange={handleChange}
        />
        <input
          id="input-registration-type"
          type="text"
          placeholder="분류"
          value="Western"
          onChange={handleChange}
        />
        <input
          id="input-registration-address"
          type="text"
          placeholder="주소"
          value="Seoul Itaewon"
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleClick}
        >
          등록
        </button>
      </div>
    ));

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
