import React from 'react';

import { render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('when layout', () => {
    it('has input with name placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
    });
    it('has input with category placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/분류/)).not.toBeNull();
    });
    it('has input with address placeholder', () => {
      const { getByPlaceholderText } = render((
        <InputContainer />
      ));

      expect(getByPlaceholderText(/주소/)).not.toBeNull();
    });
    it('has button title', () => {
      const { container } = render((
        <InputContainer />
      ));

      expect(container).toHaveTextContent(/등록/);
    });
  });
});
