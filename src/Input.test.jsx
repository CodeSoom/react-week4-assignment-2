import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Input from './Input';

jest.mock('react-redux');

describe('Input', () => {
  context('with input value', () => {
    it('exist value in input value', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn((e) => e.preventDefault);

      useSelector.mockImplementation((selector) => selector({
        id: '100',
        name: '이름',
        category: '분류',
        address: '주소',
      }));

      const { getByPlaceholderText, getByText } = render(
        <Input onChange={handleChange} onClick={handleClick} />,
      );

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
      expect(getByPlaceholderText(/분류/)).not.toBeNull();
      expect(getByPlaceholderText(/주소/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });

    it('fire form event with all data', () => {
      const handleClick = jest.fn();
      const handleChange = jest.fn();

      useSelector.mockImplementation((selector) => selector({
        input: {
          name: '하하',
          category: '호호',
          address: '히히',
        },
      }));

      const { getByTestId } = render(<Input onChange={handleChange} onClick={handleClick} />);

      expect(handleClick).not.toBeCalled();

      fireEvent.submit(getByTestId('form'));

      expect(handleClick).toHaveBeenCalled();
    });

    it('fire form event with only name data', () => {
      const handleClick = jest.fn();
      const handleChange = jest.fn();

      useSelector.mockImplementation((selector) => selector({
        input: {
          name: '하하',
        },
      }));

      const { getByTestId } = render(<Input onChange={handleChange} onClick={handleClick} />);

      expect(handleClick).not.toBeCalled();

      fireEvent.submit(getByTestId('form'));

      expect(handleClick).toHaveBeenCalled();
    });
    it('fire form event with only category data', () => {
      const handleClick = jest.fn();
      const handleChange = jest.fn();

      useSelector.mockImplementation((selector) => selector({
        input: {
          category: '하하',
        },
      }));

      const { getByTestId } = render(<Input onChange={handleChange} onClick={handleClick} />);

      expect(handleClick).not.toBeCalled();

      fireEvent.submit(getByTestId('form'));

      expect(handleClick).toHaveBeenCalled();
    });
    it('fire form event with only address data', () => {
      const handleClick = jest.fn();
      const handleChange = jest.fn();

      useSelector.mockImplementation((selector) => selector({
        input: {
          address: '하하',
        },
      }));

      const { getByTestId } = render(<Input onChange={handleChange} onClick={handleClick} />);

      expect(handleClick).not.toBeCalled();

      fireEvent.submit(getByTestId('form'));

      expect(handleClick).toHaveBeenCalled();
    });
  });

  context('when change \'이름\' input value', () => {
    it('returns changed value in input value', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn((e) => e.preventDefault);

      const { getByPlaceholderText, getByDisplayValue } = render(
        <Input onChange={handleChange} onClick={handleClick} />,
      );

      fireEvent.change(getByPlaceholderText(/이름/), {
        target: {
          value: '바보',
        },
      });

      expect(getByDisplayValue('바보')).not.toBeNull();
    });
  });
  context('when change \'분류\' input value', () => {
    it('returns changed value in input value', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn((e) => e.preventDefault);

      const { getByPlaceholderText, getByDisplayValue } = render(
        <Input onChange={handleChange} onClick={handleClick} />,
      );

      fireEvent.change(getByPlaceholderText(/분류/), {
        target: {
          value: '바보',
        },
      });

      expect(getByDisplayValue('바보')).not.toBeNull();
    });
  });
  context('when change \'주소\' input value', () => {
    it('returns changed value in input value', () => {
      const handleChange = jest.fn();
      const handleClick = jest.fn((e) => e.preventDefault);

      const { getByPlaceholderText, getByDisplayValue } = render(
        <Input onChange={handleChange} onClick={handleClick} />,
      );

      fireEvent.change(getByPlaceholderText(/주소/), {
        target: {
          value: '바보',
        },
      });

      expect(getByDisplayValue('바보')).not.toBeNull();
    });
  });
});
