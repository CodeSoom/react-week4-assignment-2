import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders three input box and button', () => {
    const { queryByPlaceholderText, queryByText } = render((
      <Input />
    ));

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('changes the name', () => {
    const handleChangeName = jest.fn();

    const { queryByPlaceholderText } = render((
      <Input
        onChange={handleChangeName}
      />
    ));

    fireEvent.change(queryByPlaceholderText('이름'), {
      target: { value: '고수닭갈비' },
    });

    expect(handleChangeName).toBeCalled();
  });
});
