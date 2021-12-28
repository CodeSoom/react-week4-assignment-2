import { render, fireEvent } from '@testing-library/react';

import Input from '.';

describe('Input', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders input', () => {
    const { getByRole } = render(<Input />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with type', () => {
    const { getByRole } = render(<Input type="text" />);

    expect(getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('renders with required', () => {
    const { getByRole } = render(<Input required />);

    expect(getByRole('textbox')).toBeRequired();
  });

  it('renders with placeholder', () => {
    const { getByRole } = render(<Input placeholder="test" />);

    expect(getByRole('textbox')).toHaveAttribute('placeholder', 'test');
  });

  it('renders with id', () => {
    const { getByRole } = render(<Input id="test" />);

    expect(getByRole('textbox')).toHaveAttribute('id', 'test');
  });

  it('renders with name', () => {
    const { getByRole } = render(<Input name="test" />);

    expect(getByRole('textbox')).toHaveAttribute('name', 'test');
  });

  it('renders with label', () => {
    const { getByLabelText } = render(<Input id="test-id" label="test" />);

    expect(getByLabelText('test')).toHaveAttribute('id', 'test-id');
  });

  it('renders with value', () => {
    const { getByRole } = render(<Input value="test" onChange={handleChange} />);

    expect(getByRole('textbox')).toHaveValue('test');
  });

  it('calls onChange when value is changed', () => {
    const { getByRole } = render(<Input value="" onChange={handleChange} />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });

    expect(handleChange).toBeCalled();
  });
});
