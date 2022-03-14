import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../src/FormContainer';
import { addNewRestaurant, changeInput } from '../src/store/actions';

jest.mock('react-redux');

describe('FormContainer', () => {
  const dispatch = jest.fn();
  const renderComponent = () => render(<FormContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      newId: 100,
      input: {
        name: '',
        category: '',
        address: '',
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('FormContainer 가 렌더링 된다.', () => {
    const { container, getByPlaceholderText } = renderComponent();

    expect(container).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('input 입력 값이 변할때 changeInput 이 dispatch 된다.', () => {
    const { getByPlaceholderText } = renderComponent();
    const inputName = getByPlaceholderText(/이름/);
    fireEvent.change(inputName, { target: { value: '마녀주방' } });

    expect(dispatch).toBeCalledWith(changeInput(inputName.name, '마녀주방'));
  });

  it('등록 버튼이 눌리면 addNewRestaurant 이 dispatch 된다.', () => {
    const { getByRole } = renderComponent();

    fireEvent.submit(getByRole('form'));

    expect(dispatch).toBeCalledWith(addNewRestaurant());
  });
});
