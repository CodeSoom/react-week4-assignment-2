import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChangeName = jest.fn();
  const handleChangeCategory = jest.fn();
  const handleChangeAddress = jest.fn();
  describe('inputs', () => {
    it('renders input boxes', () => {
      const { getAllByRole } = render(<Input />);

      expect(getAllByRole('textbox')).toHaveLength(3);
    });

    it('has input boxes with placeHolder', () => {
      const { getByPlaceholderText } = render(<Input />);

      expect(getByPlaceholderText('이름')).toBeInTheDocument();
      expect(getByPlaceholderText('분류')).toBeInTheDocument();
      expect(getByPlaceholderText('주소')).toBeInTheDocument();
    });
  });

  it('changes value', () => {
    const { getByDisplayValue } = render(
      <Input
        name='코드숨 식당'
        category='중국집'
        address='강남'
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
      />
    );
    expect(getByDisplayValue('코드숨 식당')).not.toBeNull();
    expect(getByDisplayValue('중국집')).not.toBeNull();
    expect(getByDisplayValue('강남')).not.toBeNull();
  });

  it('call handleChangeName when name changes', () => {
    const { getByDisplayValue } = render(
      <Input
        name='코드숨 식당'
        category='중국집'
        address='강남'
        onChangeName={handleChangeName}
        onChangeCategory={handleChangeCategory}
        onChangeAddress={handleChangeAddress}
      />
    );
    fireEvent.change(getByDisplayValue('코드숨 식당'), {
      target: { value: '코코 식당' },
    });
    expect(handleChangeName).toBeCalled();
  });

  describe('button', () => {
    it('renders button with text', () => {
      const { getByText } = render(<Input />);
      expect(getByText('등록')).toBeInTheDocument();
    });
  });
});
