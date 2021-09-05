import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('shows restaurant list given by redux state', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { name: '마녀주방', category: '분식', address: '서울시 강남구' },
        { name: '시카고피자', category: '양식', address: '이태원동' },
      ],
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/시카고피자/)).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();

    fireEvent.click(getByText('등록'));
    expect(dispatch).toBeCalled();
  });
});
