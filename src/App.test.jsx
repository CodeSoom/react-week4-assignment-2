import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';
import { restaurant } from './fixtures/restaurant';

jest.mock('react-redux');

describe('App', () => {
  test('새로운 레스토랑을 추가한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
      restaurants: [],
      newId: 1,
    }));

    const { queryByText } = render(<App />);

    expect(queryByText(/홍콩반점/)).toBeNull();
  });
});
