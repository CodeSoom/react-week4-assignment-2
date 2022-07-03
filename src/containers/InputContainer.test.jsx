import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  given('restaurantName', () => '');

  useSelector.mockImplementation((selector) => selector({
    name: given.restaurantName,
  }));

  const renderInputContainer = () => render((<InputContainer />));

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  context('입력된 이름이 있으면', () => {
    it('입력된 이름이 보인다.', () => {
      given('restaurantName', () => '마녀주방');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('이름')).toHaveDisplayValue(given.restaurantName);
    });
  });

  context('입력된 이름이 없으면', () => {
    it('input이 비어있다.', () => {
      given('restaurantName', () => '');

      const { getByPlaceholderText } = renderInputContainer();

      expect(getByPlaceholderText('이름')).toHaveDisplayValue('');
    });
  });
});
