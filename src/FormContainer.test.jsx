// 인풋컨테이너 테스트
// - input의 상태 선언
// - redux 적용하기
// - input에서 입력한 핸들러 선언
// - 각각의 input 컴포넌트에 잘 전달되는지
// - 완료 버튼시 리스트에 추가 되는지

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import FormContainer from './FormContainer';

describe('FormContainer', () => {
  const renderFormContainer = () => render(<FormContainer />);
  jest.mock('react-redux');
  useSelector.mockImplementation((selector) => selector({
    title: '투썸플레이스',
    sort: '카페',
    location: '신도림',
  }));
  describe('input 값이 변경되면', () => {
    it('input에 입력된 값이 보인다.', () => {
      const { getByDisplayValue } = renderFormContainer();
      expect(getByDisplayValue('투썸플레이스')).not.toBeNull();
      expect(getByDisplayValue('카페')).not.toBeNull();
      expect(getByDisplayValue('신도림')).not.toBeNull();
    });
  });

  describe('Button이 클릭되면', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    it('reducer 함수를 호출한다.', () => {
      const { getByText } = renderFormContainer();
      fireEvent.click(getByText('등록'));
      expect(dispatch).toBeCalledWith({
        type: 'ADD_RESTAURANT',
      });
    });
  });
});
