import InputContainer from '../src/InputContainer';

describe('InputContainer', () => {
  const renderComponent = () => <InputContainer />;
  it('InputContainer 가 렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });
});
