import { render, fireEvent } from '@testing-library/react';
import RestaurantPage from './RestaurantPage';

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
});
