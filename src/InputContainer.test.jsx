import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    name: '',
    category: '',
    address: '',
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => (dispatch));
  const renderInputContainer = () => render(<InputContainer />);

  beforeEach(() => {
    dispatch.mockClear();
  });
  context('식당이름 입력할 때', () => {
    it('handleChangeValue를 사용한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '사가 식탁' } });
      expect(dispatch).toBeCalledWith(
        {
          type: 'handleChangeValue',
          payload: {
            name: '사가 식탁',
          },
        },
      );
    });
  });
  context('카테고리 입력할 때', () => {
    it('handleChangeValue를 사용한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: '중식당' } });
      expect(dispatch).toBeCalledWith(
        {
          type: 'handleChangeValue',
          payload: {
            category: '중식당',
          },
        },
      );
    });
  });
  context('주소 입력할 때', () => {
    it('handleChangeValue를 사용한다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: '성복역 근처' } });
      expect(dispatch).toBeCalledWith(
        {
          type: 'handleChangeValue',
          payload: {
            address: '성복역 근처',
          },
        },
      );
    });
  });
  context('등록할 때', () => {
    it('saveData를 사용한다.', () => {
      const { getByText } = renderInputContainer();
      fireEvent.click(getByText('등록'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'saveData',
        },
      );
    });
  });
});
