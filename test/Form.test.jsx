import { fireEvent, render } from '@testing-library/react';
import Form from '../src/Form';

describe('Form', () => {
  const handleChangeByName = jest.fn();
  const handleSubmit = jest.fn((event) => {
    event.preventDefault();
  });

  const renderComponent = (name = '', category = '', address = '') => render(<Form
    name={name}
    category={category}
    address={address}
    onChangeByName={handleChangeByName}
    onSubmit={handleSubmit}
  />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Form 컴포넌트가 렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('props 로 넘겨받은 값이 입력창에 노출된다.', () => {
    const { getByPlaceholderText } = renderComponent('마녀주방', '한식', '경기도');

    expect(getByPlaceholderText(/이름/)).toHaveValue('마녀주방');
    expect(getByPlaceholderText(/분류/)).toHaveValue('한식');
    expect(getByPlaceholderText(/주소/)).toHaveValue('경기도');
  });

  it('입력창의 값이 변할때 onChangeByName 이 호출된다.', () => {
    const { getByPlaceholderText } = renderComponent();

    const inputName = getByPlaceholderText(/이름/);

    fireEvent.change(inputName, { target: { value: '마녀주방' } });

    expect(handleChangeByName).toBeCalled();
  });

  it('등록 버튼을 누르면 onSubmit 이 호출된다.', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /등록/ }));

    expect(handleSubmit).toBeCalled();
  });
});
