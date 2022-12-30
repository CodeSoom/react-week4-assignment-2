import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      name: '',
      category: '',
      address: '',
      restaurants: [],
    })
  );

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => {
    return dispatch;
  });

  it('renders title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
