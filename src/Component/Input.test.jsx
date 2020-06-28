import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

const handleInputChange = jest.fn();

describe('Input', () => {
  context('이름, 분류, 주소 정보가 없을 경우', () => {
    const restaurant = {
      name: '',
      category: '',
      address: '',
    };

    it('초기화면이 나타난다.', () => {
      const { getByText, getByTestId } = render((
        <Input
          restaurant={restaurant}
          onChange={handleInputChange}
        />
      ));

      expect(getByTestId(/name/)).toBeInTheDocument();
      expect(getByTestId(/category/)).toBeInTheDocument();
      expect(getByTestId(/address/)).toBeInTheDocument();
      expect(getByText(/등록/)).toBeInTheDocument();
    });

    it('이름, 분류, 주소 값을 변경할 수 있다. ', () => {
      const { getByTestId } = render((
        <Input
          restaurant={restaurant}
          onChange={handleInputChange}
        />
      ));

      fireEvent.change(getByTestId(/name/), {
        target: { value: '마녀주방' },
      });

      expect(handleInputChange).toBeCalled();

      fireEvent.change(getByTestId(/category/), {
        target: { value: '한식' },
      });

      expect(handleInputChange).toBeCalled();

      fireEvent.change(getByTestId(/address/), {
        target: { value: '강남구' },
      });

      expect(handleInputChange).toBeCalled();
    });
  });

  context('이름, 분류, 주소 정보가 있을 경우', () => {
    const restaurant = {
      name: '마녀주방',
      category: '한식',
      address: '강남',
    };

    it('화면에 이름, 분류, 주소 정보가 표시된다.', () => {
      const { getByDisplayValue } = render((
        <Input
          restaurant={restaurant}
          onChange={handleInputChange}
        />
      ));

      expect(getByDisplayValue(/마녀주방/)).toBeInTheDocument();
      expect(getByDisplayValue(/한식/)).toBeInTheDocument();
      expect(getByDisplayValue(/강남/)).toBeInTheDocument();
    });

    it('등록 버튼을 누를 수 있다.', () => {
      const handleClickEnroll = jest.fn();

      const { getByText } = render((
        <Input
          restaurant={restaurant}
          onChange={handleInputChange}
          onClick={handleClickEnroll}
        />
      ));

      fireEvent.click(getByText(/등록/));

      expect(handleClickEnroll).toBeCalled();
    });
  });
});
