import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { TYPE_ADD_RESTAURANT } from '../actions/restaurant';
import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  it('레스토랑의 이름, 분류, 주소 중 하나 이상이 비어있다면 alert를 호출합니다.', () => {
    const spy = jest.spyOn(window, 'alert');
    spy.mockImplementation(() => {}); // Error: Not implemented: window.alert를 해결하기 위해
    const sut = render(<RestaurantPage />);

    fireEvent.change(sut.getByLabelText('이름'), { target: { value: 'foo' } });
    fireEvent.change(sut.getByLabelText('분류'), { target: { value: 'foo' } });
    fireEvent.click(sut.getByRole('button', { name: '등록' }));

    expect(spy).toBeCalledTimes(1);
  });

  it('레스토랑 정보를 입력하고 등록 버튼을 클릭하면 addRestaurant action이 dispatch됩니다.', () => {
    const mock = jest.fn();
    useDispatch.mockImplementation(() => mock);
    const payload = { name: 'foo', category: 'bar', address: 'baz' };
    const sut = render(<RestaurantPage />);

    fireEvent.change(sut.getByLabelText('이름'), { target: { value: payload.name } });
    fireEvent.change(sut.getByLabelText('분류'), { target: { value: payload.category } });
    fireEvent.change(sut.getByLabelText('주소'), { target: { value: payload.address } });
    fireEvent.click(sut.getByRole('button', { name: '등록' }));

    expect(mock).toBeCalledTimes(1);
    expect(mock).toBeCalledWith(expect.objectContaining({ type: TYPE_ADD_RESTAURANT, payload }));
  });
});
