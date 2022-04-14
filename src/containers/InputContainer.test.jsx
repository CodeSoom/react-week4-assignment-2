import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has 3 inputs and 1 button', () => {
    const { queryByLabelText, queryByText } = render(<InputContainer />);

    expect(queryByLabelText('이름').getAttribute('placeholder')).toBe('이름');
    expect(queryByLabelText('분류').getAttribute('placeholder')).toBe('분류');
    expect(queryByLabelText('주소').getAttribute('placeholder')).toBe('주소');
    expect(queryByText('등록')).not.toBeNull();
  });
});
