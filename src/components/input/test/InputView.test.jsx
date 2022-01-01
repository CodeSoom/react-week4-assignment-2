import { render, fireEvent } from '@testing-library/react';
import InputView from '../InputView';

describe('InputView', () => {
  const onChangeName = jest.fn();
  const onChangeCategory = jest.fn();
  const onChangeAddress = jest.fn();
  const onClickAdd = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent() {
    return render((
      <InputView
        name=""
        category=""
        address=""
        onChangeName={onChangeName}
        onChangeCategory={onChangeCategory}
        onChangeAddress={onChangeAddress}
        onClickAdd={onClickAdd}
      />
    ));
  }

  it('이름이 변경되면 onChangeName 이 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.change(getByRole('textbox', { name: /name/i }), {
      target: { value: 'test' },
    });

    expect(onChangeName).toBeCalledTimes(1);
  });

  it('종류가 변경되면 onChangeCategory 이 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.change(getByRole('textbox', { name: /category/i }), {
      target: { value: 'test' },
    });

    expect(onChangeCategory).toBeCalledTimes(1);
  });

  it('주소가 변경되면 onChangeAddress 이 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.change(getByRole('textbox', { name: /address/i }), {
      target: { value: 'test' },
    });

    expect(onChangeAddress).toBeCalledTimes(1);
  });

  it('등록 버튼을 클릭하면 onClickAdd가 1회 호출된다', () => {
    const { getByRole } = renderTestComponent();

    fireEvent.click(getByRole('button'));

    expect(onClickAdd).toBeCalledTimes(1);
  });
});
