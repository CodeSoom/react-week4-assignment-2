import { render } from '@testing-library/react';

import { useSelector } from '../../__mocks__/react-redux';
import restaurants from '../../__mocks__/restaurants';
import ListContainer from './ListContainer';

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render(<ListContainer />);

  expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeUndefined();
  expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeUndefined();
});
