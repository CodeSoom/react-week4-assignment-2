import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('<Restaurants />', () => {
  context('<Restaurant /> 랜더링 확인', () => {
    it('리스트', () => {
      const { container } = render((
        <Restaurants />
      ));
      expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    });
  });
});
