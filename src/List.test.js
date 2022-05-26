import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고 피자', category: '양식', address: '이태원',
    },
  ];

  const { getByText } = render((
    <List
      restaurants={restaurants}
    />
  ));

  expect(getByText('/마녀주방/')).toBeInTheDocument();
  expect(getByText('/한식/')).toBeInTheDocument();
  expect(getByText('/서울시 강남구/')).toBeInTheDocument();

  expect(getByText('/시카고 피자/')).toBeInTheDocument();
  expect(getByText('/양식/')).toBeInTheDocument();
  expect(getByText('/이태원/')).toBeInTheDocument();
});
