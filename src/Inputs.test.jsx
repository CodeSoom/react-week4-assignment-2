import { fireEvent, render } from '@testing-library/react';

import Inputs from './Inputs';

describe('Inputs', () => {
  it('renders restaurant inputs', () => {
    const { queryByPlaceholderText } = render((
      <Inputs />
    ));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens for change event on update restaurant name', () => {
    const onChangeName = jest.fn();

    const { getByPlaceholderText } = render((
      <Inputs
        onChangeName={onChangeName}
      />
    ));

    fireEvent.change(
      getByPlaceholderText('이름'),
      { target: { value: '한우마을' } },
    );

    expect(onChangeName).toBeCalledWith('한우마을');
  });

  it('listens for change event on update restaurant name', () => {
    const onChangeCategory = jest.fn();

    const { getByPlaceholderText } = render((
      <Inputs
        onChangeCategory={onChangeCategory}
      />
    ));

    fireEvent.change(
      getByPlaceholderText('분류'),
      { target: { value: '한식' } },
    );

    expect(onChangeCategory).toBeCalledWith('한식');
  });

  it('listens for change event on update restaurant name', () => {
    const onChangeAddress = jest.fn();

    const { getByPlaceholderText } = render((
      <Inputs
        onChangeAddress={onChangeAddress}
      />
    ));

    fireEvent.change(
      getByPlaceholderText('주소'),
      { target: { value: '경기도 수원시' } },
    );

    expect(onChangeAddress).toBeCalledWith('경기도 수원시');
  });
});
