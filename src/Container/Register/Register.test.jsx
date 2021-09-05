import { render } from '@testing-library/react';

import Register from './Register';

describe('register', () => {
  describe('input', () => {
    it('has the value given from prop', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn();

      const { getAllByPlaceholderText } = render((
        <Register
          name="마녀주방"
          category="분식"
          address="서울시 강남구"
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ));

      expect(getAllByPlaceholderText(/마녀주방/)).not.toBeNull();
      expect(getAllByPlaceholderText(/분식/)).not.toBeNull();
      expect(getAllByPlaceholderText(/서울시 강남구/)).not.toBeNull();
    });
  });
});
