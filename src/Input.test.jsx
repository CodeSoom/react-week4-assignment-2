import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Changes input value', () => {
    const handleChange = jest.fn();

    const { getByDisplayValue, getByLabelText } = render((
      <Input
        label="메뉴1"
        value="치킨"
        handleChange={handleChange}
      />
    ));

    expect(getByDisplayValue('치킨')).not.toBeNull();

    fireEvent.change(getByLabelText('메뉴1'), {
      target: { value: '피자' },
    });

    expect(handleChange).toBeCalled();
  });
});
