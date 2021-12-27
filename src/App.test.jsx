/* 계획
1. 아래 컴포넌트를 포함하고 있다
*/
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

import { initialState } from './reducer';

jest.mock('react-redux');

describe('App', () => {
  it('render Lower Component', () => {
    useSelector.mockImplementation((selector) => selector(initialState));
    const { getByText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
