import { render, fireEvent } from '@testing-library/react';

import AddButton from './AddButton';

describe('<AddButton />', () => {
  const handleClick = jest.fn();

  const renderAddButton = () => render((<AddButton onClick={handleClick} />));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('button이 보인다.', () => {
    const { getByText } = renderAddButton();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('클릭 이벤트를 수신한다', () => {
    const { getByText } = renderAddButton();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('등록'));

    expect(handleClick).toBeCalledTimes(1);
  });
});
