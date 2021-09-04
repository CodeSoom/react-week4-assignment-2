import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

const handleChangeInput = jest.fn();
const handleAddRestaurant = jest.fn();

describe('Form', () => {
  function renderForm() {
    return render((
      <Form
        nameText=""
        categoryText=""
        addressText=""
        onChangeInput={handleChangeInput}
        onClick={handleAddRestaurant}
      />
    ));
  }

  it('식당을 등록하기 위한 input과 button을 보여준다', () => {
    const { getByText, getByPlaceholderText } = renderForm();

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('input에 입력하면 change 이벤트가 발생한다', () => {
    const { getByPlaceholderText } = renderForm();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '시골순두부' },
    });

    expect(handleChangeInput).toBeCalled();

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(handleChangeInput).toBeCalled();

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '인천시 계양구' },
    });

    expect(handleChangeInput).toBeCalled();
  });

  it('등록을 클릭하면 Click 이벤트가 발생한다', () => {
    const { getByText } = renderForm();

    fireEvent.click(getByText(/등록/));

    expect(handleAddRestaurant).toBeCalled();
  });
});
