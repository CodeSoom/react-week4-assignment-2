import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

const handleChangeName = jest.fn();
const handleChangeCategory = jest.fn();
const handleChangeAddress = jest.fn();
const handleAddRestaurant = jest.fn();

describe('Input', () => {
  function renderInput() {
    return render((
      <Input
        nameText=""
        categoryText=""
        addressText=""
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
        onClick={handleAddRestaurant}
      />
    ));
  }

  it('식당을 등록하기 위한 input과 button을 보여준다.', () => {
    const { getByText, getByPlaceholderText } = renderInput();

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('input에 입력하면 change 이벤트가 발생한다.', () => {
    const { getByPlaceholderText } = renderInput();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '시골순두부' },
    });

    expect(handleChangeName).toBeCalled();

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(handleChangeCategory).toBeCalled();

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '인천시 계양구' },
    });

    expect(handleChangeAddress).toBeCalled();
  });

  it('등록을 클릭하면 Click 이벤트가 발생한다.', () => {
    const { getByText } = renderInput();

    fireEvent.click(getByText(/등록/));

    expect(handleAddRestaurant).toBeCalled();
  });
});
