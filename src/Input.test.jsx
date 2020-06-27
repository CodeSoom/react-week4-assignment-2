import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  it('should get input', () => {
    const registration = {
      name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon',
    };

    const { getByDisplayValue, getByPlaceholderText } = render((
      <Input
        registration={registration}
        onChange={handleChange}
        onClick={handleClick}
      />
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
    const registration = {
      name: 'Seoul Pizza', type: 'Western', address: 'Seoul Itaewon',
    };

    const { getByText } = render((
      <Input
        registration={registration}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalled();
  });
});
