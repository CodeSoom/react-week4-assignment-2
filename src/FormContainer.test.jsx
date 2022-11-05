import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock();

describe('FormContainer', () => {
  function renderFormContainer() {
    return render((<FormContainer />));
  }

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    name: '김밥천국',
    category: '분식',
    address: '전국',
  }));

  it('FormContainer가 렌더링된다.', () => {
    const { getByText, getByDisplayValue } = renderFormContainer();

    expect(getByText('등록')).not.toBeNull();
    expect(getByDisplayValue('김밥천국')).not.toBeNull();
    expect(getByDisplayValue('분식')).not.toBeNull();
    expect(getByDisplayValue('전국')).not.toBeNull();
  });

  it('input에 입력하면 handleChange 함수가 실행되어 value가 변경된다.', () => {
    const { getByPlaceholderText } = renderFormContainer();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '피자스쿨',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeText',
      payload: {
        key: 'name',
        content: '피자스쿨',
      },
    });
  });

  it('등록 버튼을 누르면 레스토랑에 관한 것이 등록된다.', () => {
    const { getByText } = renderFormContainer();

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
