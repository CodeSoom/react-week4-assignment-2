import React from 'react';
import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

describe('InputContainer', () => {
  it('should render three inputs and one button', () => {
    const { getByPlaceholderText, getByText } = render(<InputContainer />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });
});
