import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';
import { addRestaurant } from '../actions';
import { restaurant } from '../fixtures/restaurant';

jest.mock('react-redux');

describe('FormContainer', () => {
  test('레스토랑을 추가한다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));
    const { getByText } = render(<FormContainer />);

    fireEvent.click(getByText('등록'));
    expect(dispatch).toBeCalledWith(addRestaurant(1));
  });

  test('레스토랑을 작성폼을 수정한다.', () => {
    // const onChange = jest.fn();
    // const { getByDisplayValue } = render(
    //   <Form
    //     onChange={onChange}
    //     title="홍반장"
    //     menu="중국집"
    //     address="판교"
    //   />,
    // );

    // expect(getByDisplayValue('홍반장')).not.toBeNull();
    // expect(getByDisplayValue('중국집')).not.toBeNull();
    // expect(getByDisplayValue('판교')).not.toBeNull();
  });
});
