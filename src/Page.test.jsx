import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';


describe('Page', () => {
  context('Value is entered in 3 blanks.',()=>{
    it('Preserve the value.', () => {
      const restaurants =  [
        {id: 1, name: "마녀주방", category: "한식", address: "서울시 강남구" },
        {id: 2, name: "시카고피자", category: "양식", address: "이태원동" },
      ]

      const { container } = render((
        <Page />
      ));

      expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    });
  });
});