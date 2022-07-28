import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  const customRender = (name, placeholder, value = '') => (
    render((
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    ))
  );

  context('input name is name', () => {
    it('renders', () => {
      const { queryByPlaceholderText } = customRender('name', '이름');

      expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText, queryByText } = customRender('name', '이름');

      fireEvent.change(queryByPlaceholderText(/이름/), { target: { value: 'KFC' } });

      expect(queryByText(/KFC/)).not.toBeNull();
    });
  });

  context('input name is type', () => {
    it('renders', () => {
      const { queryByPlaceholderText } = customRender('category', '분류');

      expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText, queryByText } = customRender('category', '분류');

      fireEvent.change(queryByPlaceholderText(/분류/), { target: { value: '치킨' } });

      expect(queryByText(/치킨/)).not.toBeNull();
    });
  });

  context('input name is address', () => {
    it('renders', () => {
      const { queryByPlaceholderText } = customRender('address', '주소');

      expect(queryByPlaceholderText(/주소/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText, queryByText } = customRender('address', '주소');

      fireEvent.change(queryByPlaceholderText(/주소/), { target: { value: '강남역' } });

      expect(queryByText(/강남역/)).not.toBeNull();
    });
  });
});
