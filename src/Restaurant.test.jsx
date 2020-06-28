import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('<Restaurant />', () => {
  context('랜더링 확인', () => {
    it('리스트', () => {
      const restaurant = {
        id: 1,
        name: '바른 치킨',
        classify: '치킨',
        address: '시립대로',
      };

      const { container } = render((
        <Restaurant restaurant={restaurant} />
      ));

      expect(container).toHaveTextContent('바른 치킨|치킨|시립대로');
    });
  });
});
