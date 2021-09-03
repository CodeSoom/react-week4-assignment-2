import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeFood = jest.fn();
  const handleChangeLocation = jest.fn();
  const handleClickAdd = jest.fn();

  function renderInput() {
    return render((
      <Input
        name=""
        food=""
        location=""
        handleChangeName={handleChangeName}
        handleChangeFood={handleChangeFood}
        handleChangeLocation={handleChangeLocation}
        onClick={handleClickAdd}
      />));
  }

  it('renders input elements', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });

  it('listens input value change', () => {
    const { getByLabelText } = renderInput();

    userEvent.type(getByLabelText(/이름/), '좋은 식당');
    userEvent.type(getByLabelText(/분류/), '한식');
    userEvent.type(getByLabelText(/주소/), '서울');

    expect(handleChangeName).toBeCalled();
    expect(handleChangeFood).toBeCalled();
    expect(handleChangeLocation).toBeCalled();
  });
});
