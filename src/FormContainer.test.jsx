import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

function stubSelector({ information = '' } = {}) {
  useSelector.mockImplementation((selector) => selector({
    information,
  }));
}

describe('FormConainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const information = {
    name: 'New Name',
    classification: 'New Classification',
    address: 'New Address',
  };

  it('renders text box & button', () => {
    stubSelector();

    const { getByText, getByPlaceholderText } = render((
      <FormContainer />
    ));

    expect(getByPlaceholderText('이름')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('분류')).toHaveAttribute('type', 'text');
    expect(getByPlaceholderText('주소')).toHaveAttribute('type', 'text');
    expect(getByText('등록')).not.toBeNull();
  });

  it('renders input to listen to change event', () => {
    stubSelector();

    const { getAllByRole } = render((
      <FormContainer />
    ));

    const inputs = getAllByRole('textbox');

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: Object.values(information)[index] } });

      expect(dispatch).toBeCalledWith({
        type: 'updateInformation',
        payload: {
          category: Object.keys(information)[index],
          content: Object.values(information)[index],
        },
      });
    });
  });

  it('renders button to listen to submit event', () => {
    stubSelector({ information });

    const { getByRole } = render((
      <FormContainer />
    ));

    fireEvent.click(getByRole('button'));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
