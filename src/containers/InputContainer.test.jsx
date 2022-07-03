import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import updateName from '../store/actions';

jest.mock('react-redux');

describe('<InputContainer />', () => {
  given('restaurantName', () => '');

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    name: given.restaurantName,
  }));

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

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

  describe('이름 입력', () => {
    it('이름을 업데이트 한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();

      expect(dispatch).not.toBeCalled();

      const newName = '마녀주방';

      fireEvent.change(getByPlaceholderText('이름'), {
        target: {
          value: newName,
        },
      });

      expect(dispatch).toBeCalledWith(updateName(newName));
    });
  });
});
