import { fireEvent, render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const onChangeName = jest.fn();
  const onChangeCategory = jest.fn();
  const onChangeAddress = jest.fn();
  const addRestaurant = jest.fn();

  const renderInputs = () => render((
    <Inputs
      onChangeName={onChangeName}
      onChangeCategory={onChangeCategory}
      onChangeAddress={onChangeAddress}
      addRestaurant={addRestaurant}
    />
  ));

  it('renders restaurant inputs', () => {
    const { queryByPlaceholderText } = renderInputs();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens for change event on update restaurant name', () => {
    const { getByPlaceholderText } = renderInputs();

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: '한우마을' } },
    );

    expect(onChangeName).toBeCalledWith('한우마을');
  });

  it('listens for change event on update restaurant name', () => {
    const { getByPlaceholderText } = renderInputs();

    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: '한식' } },
    );

    expect(onChangeCategory).toBeCalledWith('한식');
  });

  it('listens for change event on update restaurant name', () => {
    const { getByPlaceholderText } = renderInputs();

    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: '경기도 수원시' } },
    );

    expect(onChangeAddress).toBeCalledWith('경기도 수원시');
  });

  it('renders 등록 button', () => {
    const { queryByText } = renderInputs();

    expect(queryByText('등록')).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = renderInputs();

    fireEvent.click(getByText('등록'));

    expect(addRestaurant).toBeCalled();
  });
});
