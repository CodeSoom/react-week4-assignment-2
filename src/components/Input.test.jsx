import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleInputChange = jest.fn();
  const handleSubmit = jest.fn();

  const restaurant = {
    name: '마녀주방',
    category: '한식',
    address: '잠실',
  };

  function renderInput() {
    return render((
      <Input
        name={restaurant.name}
        category={restaurant.category}
        address={restaurant.address}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('name input이 보여집니다.', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  it('category input이 보여집니다.', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('분류')).toBeInTheDocument();
  });

  it('address input이 보여집니다.', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  it('button이 보여집니다.', () => {
    const { getByRole } = renderInput();

    expect(getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  it('name이 restaurant의 name과 같습니다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurant.name);
  });

  it('category가 restaurant의 category와 같습니다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('분류')).toHaveValue(restaurant.category);
  });

  it('address가 restaurant의 address와 같습니다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('주소')).toHaveValue(restaurant.address);
  });

  it('name을 변경하면 handleChangeName이 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInput();

    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '김가네' } });

    expect(handleInputChange).toBeCalled();
  });

  it('category를 변경하면 handleChangeCategory가 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInput();

    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분식' } });

    expect(handleInputChange).toBeCalled();
  });

  it('address를 변경하면 handleChangeAddress가 호출됩니다.', () => {
    const { getByPlaceholderText } = renderInput();

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '창신' } });

    expect(handleInputChange).toBeCalled();
  });

  it('버튼을 클릭하면 onSubmit이벤트가 호출됩니다.', () => {
    const { getByRole } = renderInput();

    fireEvent.click(getByRole('button', { name: '등록' }));

    expect(handleSubmit).toBeCalled();
  });
});
