import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('레스토랑 정보가 없을 경우', () => {
    it('화면에 아무것도 나타나지 않는다.', () => {
      const informations = [];

      const { container } = render((
        <List
          informations={informations}
        />
      ));

      expect(container).toHaveTextContent('');
    });
  });

  context('레스토랑 정보가 2개 이상일 경우', () => {
    it('화면에 이름, 분류, 주소가 순서대로 각각 나타난다.', () => {
      const informations = [
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
          informations={informations}
        />
      ));

      expect(getByText(/마녀주방/)).toBeInTheDocument();
      expect(getByText(/할머니뼈해장국/)).toBeInTheDocument();
      expect(getAllByText(/한식/)[0]).toBeInTheDocument();
      expect(getByText(/강남/)).toBeInTheDocument();
      expect(getByText(/강서/)).toBeInTheDocument();
    });
  });
});
