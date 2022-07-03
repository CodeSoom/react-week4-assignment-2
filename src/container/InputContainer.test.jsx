import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { updateInputContent, addRestaurant } from '../store/actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    title: selector.title,
    category: selector.category,
    address: selector.address,
  }));

  function renderInputContainer() {
    return render((
      <InputContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('이름을 변경하면 updateInputContent가 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '김가네' } });

    expect(dispatch).toBeCalledWith(updateInputContent({ targetType: 'title', content: '김가네' }));
  });

  it('카테고리를 변경하면 updateInputContent가 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분식' } });

    expect(dispatch).toBeCalledWith(updateInputContent({ targetType: 'category', content: '분식' }));
  });

  it('주소를 변경하면 updateInputContent가 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInputContainer();

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '창신' } });

    expect(dispatch).toBeCalledWith(updateInputContent({ targetType: 'address', content: '창신' }));
  });

  it('등록 버튼을 클릭 시 addRestaurants가 호출됩니다.', () => {
    const { getByRole } = renderInputContainer();

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(dispatch).toBeCalled(addRestaurant().value);
  });
});
