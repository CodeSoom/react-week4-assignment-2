import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

const changeHandlers = {
  handleChangeName: () => jest.fn(),
  handleChangeCategory: () => jest.fn(),
  handleChangeAddress: () => jest.fn(),
};

describe('Input', () => {
  context('이름, 분류, 주소 정보가 없을 경우', () => {
    const information = {
      name: '',
      category: '',
      address: '',
    };

    it('초기화면이 나타난다.', () => {
      const { getByText, getByTestId } = render((
        <Input
          information={information}
          onChangeHandlers={changeHandlers}
        />
      ));

      expect(getByTestId(/name/)).not.toBeNull();
      expect(getByTestId(/category/)).not.toBeNull();
      expect(getByTestId(/address/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });
  });

  context('이름, 분류, 주소 정보가 있을 경우', () => {
    it('화면에 이름, 분류, 주소 정보가 표시된다..', () => {
      const information = {
        name: '마녀주방',
        category: '한식',
        address: '강남',
      };

      const { getByDisplayValue } = render((
        <Input
          information={information}
          onChangeHandlers={changeHandlers}
        />
      ));

      expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
      expect(getByDisplayValue(/한식/)).not.toBeNull();
      expect(getByDisplayValue(/강남/)).not.toBeNull();
    });
  });
});
