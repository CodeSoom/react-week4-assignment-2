import { render } from '@testing-library/react';

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
});
