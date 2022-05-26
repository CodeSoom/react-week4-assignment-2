import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const renderInput = () => render(<Input />);

  it('이름, 분류, 주소 input, 등록 버튼을 렌더한다', () => {
    const { getByPlaceholderText, getByRole } = renderInput();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });
});
