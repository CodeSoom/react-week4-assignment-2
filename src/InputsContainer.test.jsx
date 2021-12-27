import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputsContainer from './InputsContainer';

import { updateRestaurantInfo, addRestaurant } from './actions';

import { restautrant } from '../fixture/restautrants';

jest.mock('react-redux');

describe('InputsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restautrants: [],
    restautrant: {
      name: '',
      type: '',
      address: '',
    },
  }));

  const renderComponent = () => render(
    <InputsContainer />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('여러 input 의 값을 입력하면', () => {
    it('name input 의 key 와 value 와 함께 dispatch 를 요청한다.', () => {
      const { getByPlaceholderText } = renderComponent();

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: restautrant.name } });

      expect(dispatch).toBeCalledWith(updateRestaurantInfo('name', restautrant.name));
    });

    it('type input 의 key 와 value 와 함께 dispatch 를 요청한다.', () => {
      const { getByPlaceholderText } = renderComponent();

      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: restautrant.type } });

      expect(dispatch).toBeCalledWith(updateRestaurantInfo('type', restautrant.type));
    });

    it('type input 의 key 와 value 와 함께 dispatch 를 요청한다.', () => {
      const { getByPlaceholderText } = renderComponent();

      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: restautrant.address } });

      expect(dispatch).toBeCalledWith(updateRestaurantInfo('address', restautrant.address));
    });
  });

  it('"추가" 버튼을 클릭 하면 디스패치를 이용하여 addRestaurant 을 요청한다', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });
});
