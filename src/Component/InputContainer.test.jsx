import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('이름, 분류, 주소가 없는 경우', () => {
    it('입력 창과 등록 버튼을 보여준다', () => {
      const information = {
        name: '',
        category: '',
        address: '',
      };

      useSelector.mockImplementation((selector) => selector({ information }));

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByTestId, getByText } = render((
        <InputContainer />
      ));

      expect(getByTestId(/name/)).not.toBeNull();
      expect(getByTestId(/category/)).not.toBeNull();
      expect(getByTestId(/address/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });
  });

  context('이름, 분류, 주소가 있는 경우', () => {
    it('입력 창에 이름, 분류, 주소 정보가 입력되어있다.', () => {
      const information = {
        name: '불짬뽕',
        category: '중식',
        address: '대구',
      };

      useSelector.mockImplementation((selector) => selector(information));

      const { getByTestId } = render((
        <InputContainer />
      ));

      expect(getByTestId(/name/)).toHaveValue('불짬뽕');
      expect(getByTestId(/category/)).toHaveValue('중식');
      expect(getByTestId(/address/)).toHaveValue('대구');
    });
  });
});
