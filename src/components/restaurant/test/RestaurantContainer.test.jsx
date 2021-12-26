import { useDispatch } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import RestaurantContainer from '../RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('이름이 변경되면 dispatch 가 1회 호출된다', () => {
    const { getByRole } = render(<RestaurantContainer />);

    fireEvent.change(getByRole('textbox', { name: /name/i }), {
      target: { value: 'test' },
    });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('카테고리가 변경되면 dispatch 가 1회 호출된다', () => {
    const { getByRole } = render(<RestaurantContainer />);

    fireEvent.change(getByRole('textbox', { name: /category/i }), {
      target: { value: 'test' },
    });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('주소가 변경되면 dispatch 가 1회 호출된다', () => {
    const { getByRole } = render(<RestaurantContainer />);

    fireEvent.change(getByRole('textbox', { name: /address/i }), {
      target: { value: 'test' },
    });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('등록 버튼을 클릭하면 dispatch가 1회 호출된다', () => {
    const { getByText } = render(<RestaurantContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledTimes(1);
  });
});
