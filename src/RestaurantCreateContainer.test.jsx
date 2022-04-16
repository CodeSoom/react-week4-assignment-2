import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

describe('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({

  }));

  useDispatch.mockImplementation(() => dispatch);

  it('renders 등록 button', () => {
    const { queryByText, queryByDisplayValue } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = render((
      <RestaurantCreateContainer />
    ));

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('renders name, category, address', () => {
    const { queryByDisplayValue } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByDisplayValue('마법사주방')).not.toBeNull();
    expect(queryByDisplayValue('이탈리안')).not.toBeNull();
    expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  });
});
