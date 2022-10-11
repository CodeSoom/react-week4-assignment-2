import { useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

jest.mock('react-redux');

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeType = jest.fn();
  const handleChangeAddress = jest.fn();
  const handleClickSetList = jest.fn();

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and button components', () => {
    const { getByDisplayValue } = render((

      <Input
        shopName="마녀식당"
        shopType="한식"
        shopAddress="서울시 강남구"
      />
    ));

    expect(getByDisplayValue('마녀식당')).not.toBeNull();
    expect(getByDisplayValue('한식')).not.toBeNull();
    expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
  });

  it('calls change events', () => {
    const { getByLabelText } = render((
      <Input
        onChangeName={handleChangeName}
        onChangeType={handleChangeType}
        onChangeAddress={handleChangeAddress}
      />
    ));

    fireEvent.change(getByLabelText('레스토랑명'), {
      target: { value: '시카고피자' },
    });

    expect(handleChangeName).toBeCalled();

    fireEvent.change(getByLabelText('레스토랑 타입'), {
      target: { value: '양식' },
    });

    expect(handleChangeType).toBeCalled();

    fireEvent.change(getByLabelText('주소'), {
      target: { value: '서울시 관악구' },
    });

    expect(handleChangeAddress).toBeCalled();
  });

  it('calls click events', () => {
    const { getByText } = render((
      <Input
        onClickSetList={handleClickSetList}
      />
    ));

    fireEvent.click(getByText('등록'));

    expect(handleClickSetList).toBeCalled();
  });
});
