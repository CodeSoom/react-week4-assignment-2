import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Page from './Page';

describe('Page', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const pageRender = ({ restaurants, restaurant }) => render((
    <Page
      restaurant={restaurant}
      restaurants={restaurants}
      onChangeRestaurant={handleChange}
      onClickSubmit={handleClick}
    />
  ));

  const inputType = [
    { placeholderName: '이름', inputName: 'name', value: '마녀주방' },
    { placeholderName: '분류', inputName: 'type', value: '한식' },
    { placeholderName: '주소', inputName: 'address', value: '서울시 강남구' },
  ];

  const restaurants = [
    {
      id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', type: '양식', address: '이태원동',
    },
    {
      id: 3, name: '키와미', type: '일식', address: '분당구 정자동',
    },
  ];

  const restaurant = { name: '', type: '', address: '' };

  it('handleChange 호출을 확인한다.', () => {
    const { getByPlaceholderText } = pageRender({ restaurants, restaurant });

    expect(handleChange).not.toBeCalled();

    inputType.forEach(({ placeholderName, inputName, value }) => {
      fireEvent.change(getByPlaceholderText(placeholderName), {
        target: { value, name: inputName },
      });
    });

    expect(handleChange).toBeCalled();
  });

  it('등록 버튼 클릭시 호출되는지 확인한다.', () => {
    const { getByText, getByPlaceholderText } = pageRender({ restaurants, restaurant });
    const button = getByText(/등록/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);

    inputType.forEach(({ placeholderName }) => {
      expect(getByPlaceholderText(placeholderName)).toHaveDisplayValue('');
    });
  });

  it('"restaurants"가 보인다.', () => {
    const { container } = pageRender({ restaurants, restaurant });

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
