import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  test('onClick', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Form onClick={onClick} />);

    fireEvent.click(getByText('등록'));

    expect(onClick).toBeCalled();
  });

  test('props', () => {
    const onChange = jest.fn();
    const { getByDisplayValue } = render(
      <Form
        onChange={onChange}
        title="홍반장"
        menu="중국집"
        address="판교"
      />,
    );

    expect(getByDisplayValue('홍반장')).not.toBeNull();
    expect(getByDisplayValue('중국집')).not.toBeNull();
    expect(getByDisplayValue('판교')).not.toBeNull();
  });
});
