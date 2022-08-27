import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

function stubSelector({
  information = {
    name: '',
    classification: '',
    address: '',
  }, restaurants = [],
} = {}) {
  useSelector.mockImplementation((selector) => selector({
    information,
    restaurants,
  }));
}

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    stubSelector();

    const { getByText, getByPlaceholderText } = render((
      <App />
    ));

    expect(getByText('Restaurants')).not.toBeNull();
    expect(getByPlaceholderText('이름')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('분류')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('주소')).toHaveAttribute('type', 'text');
    expect(getByText('등록')).not.toBeNull();
  });

  context('with restaurants list', () => {
    const state = {
      restaurants: [
        {
          id: 1,
          name: '마녀주방',
          classification: '한식',
          address: '서울시 강남구',
        },
      ],
    };

    it('renders restaurants list', () => {
      stubSelector({ restaurants: state.restaurants });

      const { getAllByRole } = render((
        <App />
      ));

      state.restaurants.forEach((restaurant, index) => {
        expect(getAllByRole('listitem')[index].textContent)
          .toBe(`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`);
      });
    });
  });
});
