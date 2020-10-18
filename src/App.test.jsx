import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));
  
  expect(getByText(/등록/)).not.toBeNull();
});

describe ('App', () => {
  context("Value is received.", () => {
    it('Show revceived the value.', () => {
      const { getByPlaceholderText } = render((<App />));

      fireEvent.change(getByPlaceholderText('이름'), {target: { value: 'nameExample'} });

      expect(getByPlaceholderText('이름').value).toBe('nameExample');
    });
  });
  
  context("Button is clicked, ", () =>  {
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
  
    it("Values are contained seperately.", () => {
      const { getByText, container } = render((<App />));

      fireEvent.click(getByText('등록'));
      expect(container).toHaveTextContent('마녀주방');
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('서울시 강남구');
    });
  });
});