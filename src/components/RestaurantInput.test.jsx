import { render, fireEvent } from '@testing-library/react';
import RestaurantInput from './RestaurantInput';

describe('RestaurantInput', () => {
  it('RestaurantInput에 전달한 이벤트 핸들러들의 동작을 확인합니다.', () => {
    const sut = {
      handleChangeName: jest.fn(),
      handleChangeCategory: jest.fn(),
      handleChangeAddress: jest.fn(),
      handleClick: jest.fn(),
    };

    const { getByLabelText, getByRole } = render(
      <RestaurantInput
        onChangeName={sut.handleChangeName}
        onChangeCategory={sut.handleChangeCategory}
        onChangeAddress={sut.handleChangeAddress}
        onClick={sut.handleClick}
      />,
    );

    fireEvent.change(getByLabelText('이름'), { target: { value: 'foo' } });
    fireEvent.change(getByLabelText('분류'), { target: { value: 'foo' } });
    fireEvent.change(getByLabelText('주소'), { target: { value: 'foo' } });
    fireEvent.click(getByRole('button'), { name: '등록' });

    expect(sut.handleChangeName).toBeCalled();
    expect(sut.handleChangeCategory).toBeCalled();
    expect(sut.handleChangeAddress).toBeCalled();
    expect(sut.handleClick).toBeCalled();
  });
});
