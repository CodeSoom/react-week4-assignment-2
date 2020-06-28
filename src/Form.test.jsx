import React from 'react';

import { render } from '@testing-library/react';

import Form from './Form';

describe('<Form />', () => {
  context('랜더링 확인', () => {
    it('입력 필드', () => {
      const { getByPlaceholderText } = render((
        <Form />
      ));

      expect(getByPlaceholderText(/식당/)).toBeInTheDocument();
      expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
      expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    });
    it('등록 버튼', () => {
      const { getByText } = render((
        <Form />
      ));

      expect(getByText(/등록/)).toBeInTheDocument();
    });
  });
});
