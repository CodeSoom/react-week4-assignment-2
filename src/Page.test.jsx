import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  context('Value is existed.', () => {
    it('Preserve and pass the value.', () => {
      const restaurants = [
        {
          id: 1, 
          name: '마녀주방', 
          category: '한식', 
          address: '서울시 강남구',
        },
        {
          id: 2, 
          name: '시카고피자', 
          category: '양식', 
          address: '이태원동',
        },
      ];

      const onClickAddItem = jest.fn();
      const onChange = jest.fn();

      const { getByText } = render((
        <Page
          onClickAddItem={onClickAddItem}
          onChange={onChange}
          items={restaurants}
        />
      ));

      expect(getByText(/마녀주방/)).not.toBeNull();
    });
  });
});