import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  context('without value', () => {
    it('returns empty value', () => {
      const handleChange = jest.fn();
      const { getByPlaceholderText } = render(<Input
        onChange={handleChange}
        name="name"
        placeholder="이름"
      />);
      expect(getByPlaceholderText('이름')).toHaveValue('');
    });
  });

  context('with value', () => {
    it('returns value stored "강식당"', () => {
      const handleChange = jest.fn();
      const { getByPlaceholderText } = render(<Input
        onChange={handleChange}
        name="name"
        placeholder="이름"
        value="강식당"
      />);
      expect(getByPlaceholderText('이름')).toHaveValue('강식당');
    });
  });
});
