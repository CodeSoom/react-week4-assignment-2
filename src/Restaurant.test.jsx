import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('<Restaurant />', () => {
  context('랜더링 확인', () => {
    it('리스트', () => {
      const { container } = render((
        <Restaurant />
      ));

      expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    });
  });
});
