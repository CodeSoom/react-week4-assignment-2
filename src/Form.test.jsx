import React from 'react';

import { render } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  it('renders 3 inputs with different placeholder ', () => {
    const inputs = [
      { placehoder: '이름', value: '마녀주방' },
      { placehoder: '분류', value: '한식' },
      { placehoder: '주소', value: '서울시 강남구' },
    ];

    const { getAllByRole, getByPlaceholderText } = render((
      <Form />
    ));

    expect(getAllByRole('textbox')).toHaveLength(3);

    inputs.forEach((input) => {
      expect(getByPlaceholderText(input.placehoder)).not.toBeNull();

      expect(getByPlaceholderText(input.placehoder)).toHaveDisplayValue(input.value);
    });
  });

  it('renders "등록" button', () => {
    const { container } = render((
      <Form />
    ));

    expect(container).toHaveTextContent('등록');
  });
});
