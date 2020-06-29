import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('<Restaurants />', () => {
  context('<Restaurant /> 랜더링 확인', () => {
    context('리스트가 있을 때', () => {
      it('리스트', () => {
        const restaurants = [
          {
            id: 1,
            name: '바른 치킨',
            category: '치킨',
            address: '시립대로',
          },
        ];

        const { container } = render((
          <Restaurants
            restaurants={restaurants}
          />
        ));
        expect(container).toHaveTextContent('바른 치킨|치킨|시립대로');
      });
    });

    context('리스트가 없을 때', () => {
      it('리스트가 없습니다. 보여줍니다.', () => {
        const restaurants = [];

        const { container } = render((
          <Restaurants
            restaurants={restaurants}
          />
        ));
        expect(container).toHaveTextContent('리스트가 없습니다.');
      });
    });
  });
});
