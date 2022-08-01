import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  const customRender = ({ name, placeholder, value = '' }) => (
    render(<Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />)
  );

  context('with name', () => {
    it('renders placeholder', () => {
      const { queryByPlaceholderText } = customRender({ name: 'name', placeholder: '이름' });

      expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText } = customRender({ name: 'name', placeholder: '이름' });

      fireEvent.change(queryByPlaceholderText(/이름/), { target: { value: 'KFC' } });

      expect(handleChange).toBeCalledWith({ inputName: 'name', input: 'KFC' });
    });
  });

  context('with category', () => {
    it('renders placeholder', () => {
      const { queryByPlaceholderText } = customRender({ name: 'category', placeholder: '분류' });

      expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText } = customRender({ name: 'category', placeholder: '분류' });

      fireEvent.change(queryByPlaceholderText(/분류/), { target: { value: '치킨' } });

      expect(handleChange).toBeCalledWith({ inputName: 'category', input: '치킨' });
    });
  });

  context('with address', () => {
    it('renders placeholder', () => {
      const { queryByPlaceholderText } = customRender({ name: 'address', placeholder: '주소' });

      expect(queryByPlaceholderText(/주소/)).not.toBeNull();
    });

    it('listens to change event', () => {
      const { queryByPlaceholderText } = customRender({ name: 'address', placeholder: '주소' });

      fireEvent.change(queryByPlaceholderText(/주소/), { target: { value: '강남역' } });

      expect(handleChange).toBeCalledWith({ inputName: 'address', input: '강남역' });
    });
  });
});
