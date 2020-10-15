import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeGroup = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderInput = () => render(<Input
    name=""
    group=""
    address=""
    onChangeName={handleChangeName}
    onChangeGroup={handleChangeGroup}
    onChangeAddress={handleChangeAddress}
    onClick={handleClick}
  />);

  context('renders', () => {
    it('placholder text', () => {
      const { getByPlaceholderText } = renderInput();

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });
});
