import { fireEvent, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('Renders input text', () => {
    const { getByDisplayValue } = render((
      <Input
        label="메뉴1"
        value="치킨"
        onChange={() => { }}
      />
    ));

    expect(getByDisplayValue('치킨')).not.toBeNull();
  });
  it('Changes input value', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render((
      <Input
        label="메뉴1"
        value="치킨"
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('메뉴1'), {
      target: { value: '피자' },
    });

    expect(handleChange).toBeCalled();
  });
});
