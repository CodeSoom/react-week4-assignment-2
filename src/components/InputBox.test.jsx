import { render } from '@testing-library/react';
import InputBox from './InputBox';

it('renders input control with given name', () => {
  const { getByRole } = render(<InputBox name="이름" />);
  expect(getByRole('textbox', { lable: '이름' })).toBeInTheDocument();
});
