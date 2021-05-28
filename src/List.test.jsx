import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const restaurants = [
    {
      id: 1, name: '마녀주방', category: '한식', location: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', category: '양식', location: '이태원동',
    },
  ];

  it('has a list', () => {
    const { getAllByRole } = render(<List restaurants={restaurants} />);

    expect(getAllByRole('listitem')).toHaveLength(2);
  });

  it('has a restaurant information', () => {
    const { getAllByRole } = render(<List restaurants={restaurants} />);

    const listitem = getAllByRole('listitem');

    expect(listitem[0]).toHaveTextContent(
      `${restaurants[0].name} | ${restaurants[0].category} | ${restaurants[0].location}`,
    );
    expect(listitem[1]).toHaveTextContent(
      `${restaurants[1].name} | ${restaurants[1].category} | ${restaurants[1].location}`,
    );
  });
});
