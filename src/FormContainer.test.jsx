// 인풋컨테이너 테스트
// - input의 상태 선언
// - redux 적용하기
// - input에서 입력한 핸들러 선언
// - 각각의 input 컴포넌트에 잘 전달되는지
// - 완료 버튼시 리스트에 추가 되는지

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from './FormContainer';

describe('InputContainer', () => {
  const renderInputContainer = () => render(<FormContainer />);
  jest.mock('react-redux');
  useSelector.mockImplementation((selector) => selector({
    name: '투썸플레이스',
    sort: '카페',
    address: '신도림',
  }));
  describe('NameInput이 렌더링 된다.', () => {
    it('input이 보인다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      expect(getByPlaceholderText('이름'));
    });

    it('input에 입력된 값이 보인다.', () => {
      const { getByDisplayValue } = renderInputContainer();
      expect(getByDisplayValue('투썸플레이스')).not.toBeNull();
    });
  });

  describe('SortInput이 렌더링 된다.', () => {
    it('input이 보인다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      expect(getByPlaceholderText('분류'));
    });

    it('input에 입력된 값이 보인다.', () => {
      const { getByDisplayValue } = renderInputContainer();
      expect(getByDisplayValue('카페')).not.toBeNull();
    });
  });

  describe('AddressInput이 렌더링 된다.', () => {
    it('input이 보인다.', () => {
      const { getByPlaceholderText } = renderInputContainer();
      expect(getByPlaceholderText('주소'));
    });

    it('input에 입력된 값이 보인다.', () => {
      const { getByDisplayValue } = renderInputContainer();
      expect(getByDisplayValue('신도림')).not.toBeNull();
    });
  });

  describe('Button이 렌더링 된다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    it('button이 보인다.', () => {
      const { getByText } = renderInputContainer();
      expect(getByText('등록')).not.toBeNull();
    });

    it('button 클릭 시 입력된 값들을 통해 state가 추가된다.', () => {
      const { getByText } = renderInputContainer();
      fireEvent.click(getByText('등록'));
      expect(dispatch).toBeCalledWith({
        type: 'ADD_RESTAURANT',
      });
    });
  });
});
