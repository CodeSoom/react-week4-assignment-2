import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import NameInput from './NameInput';

describe('<NameInput />', () => {
  given('restaurantName', () => '');

  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderNameInput = (name = '') => render((<NameInput name={name} onChangeName={handleChange} />));

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderNameInput(given.restaurantName);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  context('입력된 이름이 없으면', () => {
    it('input이 비어있다.', () => {
      const { getByPlaceholderText } = renderNameInput(given.restaurantName);

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(given.restaurantName);
    });
  });

  context('입력된 이름이 있으면', () => {
    it('입력된 이름이 보인다.', () => {
      given('restaurantName', () => '마녀주방');

      const { getByPlaceholderText } = renderNameInput(given.restaurantName);

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(given.restaurantName);
    });
  });

  describe('이름 입력', () => {
    it('handleChange이 호출된다.', () => {
      given('restaurantName', () => '마녀주방');

      const { getByPlaceholderText } = renderNameInput('');

      expect(handleChange).not.toBeCalled();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: {
          value: given.restaurantName,
        },
      });

      expect(handleChange).toBeCalledWith(given.restaurantName);
    });
  });
});
