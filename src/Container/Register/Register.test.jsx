import { render, fireEvent } from '@testing-library/react';

import Register from './Register';

describe('register', () => {
  describe('input', () => {
    it('has the value given from prop', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn();

      const { getByDisplayValue } = render((
        <Register
          name="마녀주방"
          category="분식"
          address="서울시 강남구"
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ));

      expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
      expect(getByDisplayValue(/분식/)).not.toBeNull();
      expect(getByDisplayValue(/서울시 강남구/)).not.toBeNull();
    });

    it('calls handleChange', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn();

      const { getAllByPlaceholderText } = render((
        <Register
          name=""
          category=""
          address=""
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ));

      fireEvent.change(getAllByPlaceholderText('이름'), { target: { value: '마녀주방' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('calls handleClick', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn();

      const { getByText } = render((
        <Register
          name="마녀주방"
          category="분식"
          address="서울시 강남구"
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ));

      fireEvent.click(getByText('등록'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
