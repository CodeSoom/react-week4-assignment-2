import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

describe('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({

  }));

  useDispatch.mockImplementation(() => dispatch);

  it('renders 등록 button', () => {
    const { queryByText } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = render((
      <RestaurantCreateContainer />
    ));

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalled();
  });
});
