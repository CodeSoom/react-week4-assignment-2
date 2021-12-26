import { render, fireEvent } from '@testing-library/react';
import RestaurantView from './RestaurantView';

describe('RestaurantView', () => {
  let onChangeName;
  let onChangeCategory;
  let onChangeAddress;
  let onClickAdd;

  beforeEach(() => {
    onChangeName = jest.fn();
    onChangeCategory = jest.fn();
    onChangeAddress = jest.fn();
    onClickAdd = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(name = '', category = '', address = '') {
    return render((
      <RestaurantView
        name={name}
        category={category}
        address={address}
        onChangeName={onChangeName}
        onChangeCategory={onChangeCategory}
        onChangeAddress={onChangeAddress}
        onClickAdd={onClickAdd}
      />
    ));
  }

  it('이름이 변경되면 onChangeName 이 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.change(getByRole('textbox', { name: /name/i }), {
      target: { value: 'test' },
    });

    expect(onChangeName).toBeCalledTimes(1);
  });

  it('종류가 변경되면 onChangeCategory 이 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.change(getByRole('textbox', { name: /category/i }), {
      target: { value: 'test' },
    });

    expect(onChangeCategory).toBeCalledTimes(1);
  });
});
