import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('레스토랑 정보가 없을 경우', () => {
    it('화면에 아무것도 나타나지 않는다.', () => {
      const { container } = render((
        <List
          restaurants={[]}
        />
      ));

      expect(container).toHaveTextContent('');
    });
  });

  context('레스토랑 정보가 2개 이상일 경우', () => {
    it('화면에 이름, 분류, 주소가 순서대로 각각 나타난다.', () => {
      const restaurants = [
        {
          id: 1,
          name: '마녀주방',
          category: '한식',
          address: '강남',
        },
        {
          id: 2,
          name: '할머니뼈해장국',
          category: '한식',
          address: '강서',
        },
      ];

      const { getByText, getAllByText } = render((
        <List
          restaurants={restaurants}
        />
      ));

      restaurants.forEach(({ name, category, address }, i) => {
        expect(getByText(new RegExp(name))).toBeInTheDocument();
        expect(getAllByText(category, { exact: false })[i]).toBeInTheDocument();
        expect(getByText(address, { exact: false })).toBeInTheDocument();
      });
    });
  });
});
