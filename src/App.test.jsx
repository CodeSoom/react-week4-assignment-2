import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '사가식탁',
    category: '중식',
    address: '성복역 근처 ',
    data: [],
  }));

  const { getByText, getByPlaceholderText } = render(<App />);

  expect(getByText('Restaurants')).not.toBeNull();
  expect(getByPlaceholderText('이름')).not.toBeNull();
  expect(getByPlaceholderText('분류')).not.toBeNull();
  expect(getByPlaceholderText('주소')).not.toBeNull();
  expect(getByText('등록')).not.toBeNull();
});
