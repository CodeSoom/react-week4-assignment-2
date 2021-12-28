import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantForm from '.';
import { ACTION_TYPES } from '../store/actions';

jest.mock('react-redux');

describe('RestaurantForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({}));
  });

  it('', () => {

  });

  it('renders inputs and submit button', () => {
    const { getByLabelText, getByText } = render(<RestaurantForm />);

    expect(getByLabelText('이름')).toBeInTheDocument();
    expect(getByLabelText('분류')).toBeInTheDocument();
    expect(getByLabelText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });

  it('renders name', () => {
    const testName = '김밥천국';
    useSelector.mockImplementation((selector) => selector({ name: testName }));
    const { getByLabelText } = render(<RestaurantForm />);

    expect(getByLabelText('이름')).toHaveValue(testName);
  });

  it('changes name', () => {
    const { getByPlaceholderText } = render(<RestaurantForm />);
    useSelector.mockImplementation((selector) => selector({ name: '' }));
    fireEvent.change(getByPlaceholderText('이름'), { target: { value: '김밥천국' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_NAME,
      payload: { name: '김밥천국' },
    });
  });

  it('renders category', () => {
    const testCategory = '분식';
    useSelector.mockImplementation((selector) => selector({ category: testCategory }));
    const { getByLabelText } = render(<RestaurantForm />);

    expect(getByLabelText('분류')).toHaveValue(testCategory);
  });

  it('changes category', () => {
    const { getByPlaceholderText } = render(<RestaurantForm />);
    useSelector.mockImplementation((selector) => selector({ category: '' }));
    fireEvent.change(getByPlaceholderText('분류'), { target: { value: '분식' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_CATEGORY,
      payload: { category: '분식' },
    });
  });

  it('renders address', () => {
    const testAddress = '김밥천국';
    useSelector.mockImplementation((selector) => selector({ address: testAddress }));
    const { getByLabelText } = render(<RestaurantForm />);

    expect(getByLabelText('주소')).toHaveValue(testAddress);
  });

  it('changes address', () => {
    useSelector.mockImplementation((selector) => selector({ name: '' }));
    const { getByPlaceholderText } = render(<RestaurantForm />);

    fireEvent.change(getByPlaceholderText('주소'), { target: { value: '서울시 서초구 서초대로' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_ADDRESS,
      payload: { address: '서울시 서초구 서초대로' },
    });
  });

  it('adds restaurant and clears form', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '김밥천국',
      category: '분식',
      address: '서울시 서초구 서초대로',
    }));
    const { getByText } = render(<RestaurantForm />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.ADD_RESTAURANT,
      payload: {
        restaurant: {
          name: '김밥천국',
          category: '분식',
          address: '서울시 서초구 서초대로',
        },
      },
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_NAME,
      payload: { name: '' },
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_CATEGORY,
      payload: { category: '' },
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTION_TYPES.CHANGE_ADDRESS,
      payload: { address: '' },
    });
  });
});
