import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

const handlers = {
  handleChangeName: jest.fn(),
  handleChangeCategory: jest.fn(),
  handleChangeAddress: jest.fn(),
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
          onChangeHandlers={handlers}
        />
      ));

      expect(getByTestId(/name/)).not.toBeNull();
      expect(getByTestId(/category/)).not.toBeNull();
      expect(getByTestId(/address/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });

    it('이름, 분류, 주소 값을 변경할 수 있다. ', () => {
      const { getByTestId } = render((
        <Input
          information={information}
          onChangeHandlers={handlers}
        />
      ));

      fireEvent.change(getByTestId(/name/), {
        target: { value: '마녀주방' },
      });

      expect(handlers.handleChangeName).toBeCalled();

      fireEvent.change(getByTestId(/category/), {
        target: { value: '한식' },
      });

      expect(handlers.handleChangeCategory).toBeCalled();

      fireEvent.change(getByTestId(/address/), {
        target: { value: '강남구' },
      });

      expect(handlers.handleChangeAddress).toBeCalled();
    });
  });

  context('이름, 분류, 주소 정보가 있을 경우', () => {
    const information = {
      name: '마녀주방',
      category: '한식',
      address: '강남',
    };

    it('화면에 이름, 분류, 주소 정보가 표시된다.', () => {

      const { getByDisplayValue } = render((
        <Input
          information={information}
          onChangeHandlers={handlers}
        />
      ));

      expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
      expect(getByDisplayValue(/한식/)).not.toBeNull();
      expect(getByDisplayValue(/강남/)).not.toBeNull();
    });

    it('등록 버튼을 누를 수 있다.', () => {
      const handleClickEnroll = jest.fn();

      const { getByText } = render((
        <Input
          information={information}
          onChangeHandlers={handlers}
          onClick={handleClickEnroll}
        />
      ));

      fireEvent.click(getByText(/등록/));

      expect(handleClickEnroll).toBeCalled();
    });
  });
});
