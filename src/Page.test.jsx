import React from 'react';

import { render } from '@testing-library/react';

import Page from './Page';


describe('Page', () => {
  context('Value is entered in 3 blanks.',()=>{
    it('Preserve the value.', () => {
      const restaurants =  [
        {id: 1, name: "마녀주방", category: "한식", address: "서울시 강남구" },
        {id: 2, name: "시카고피자", category: "양식", address: "이태원동" },
      ];

      const onClickAddTask = jest.fn();
      const onChange = jest.fn();

      const { container } = render((
        <Page
          name=""
          categoryTitle=""
          addressTitle=""
          onClickAddTask={onClickAddTask}
          onChange={onChange}
          items={restaurants}
         />
      ));

      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });
});