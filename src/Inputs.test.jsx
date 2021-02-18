import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  const handleClickAddButton = jest.fn();

  it('Render Inputs', () => {
    const { getByPlaceholderText, getByText } = render((
      <Inputs
        handleClickButton={handleClickAddButton}
      />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  it('Fire Event when user click Add button', () => {
    const { getByText, getByPlaceholderText } = render((
      <Inputs
        handleClickButton={handleClickAddButton}
      />
    ));
    expect(getByText(/등록/)).not.toBeNull();
    fireEvent.click(getByText(/등록/));

    expect(handleClickAddButton).toBeCalled();

    expect(getByPlaceholderText(/이름/).value).toBe('');
    expect(getByPlaceholderText(/분류/).value).toBe('');
    expect(getByPlaceholderText(/주소/).value).toBe('');
  });
});
