import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import InputContainer from '../src/InputContainer';
import { changeInput } from '../src/store/actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  const renderComponent = () => render(<InputContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      nextId: 1,
      name: '',
      category: '',
      address: '',
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
  });

  it('InputContainer 가 렌더링 된다.', () => {
    const { container, getByPlaceholderText } = renderComponent();

    expect(container).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('인풋의 입력 값이 변할때 changeInput 이 dispatch 된다', () => {
    const { getByPlaceholderText } = renderComponent();

    fireEvent.change(getByPlaceholderText(/이름/), { target: { value: '마녀주방' } });
    expect(dispatch).toBeCalledWith(changeInput('name', '마녀주방'));
  });
});
