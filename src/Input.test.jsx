import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  describe('inputs', () => {
    it('renders input boxes', () => {
      const { getAllByRole } = render(<Input />);

      expect(getAllByRole('textbox')).toHaveLength(3);
    });

    it('has input boxes with placeHolder', () => {
      const { getByPlaceholderText } = render(<Input />);

      expect(getByPlaceholderText('이름')).toBeInTheDocument();
      expect(getByPlaceholderText('분류')).toBeInTheDocument();
      expect(getByPlaceholderText('주소')).toBeInTheDocument();
    });
  });

  describe('button', () => {
    it('renders button with text', () => {
      const { getByText } = render(<Input />);
      expect(getByText('등록')).toBeInTheDocument();
    });
  });
});
