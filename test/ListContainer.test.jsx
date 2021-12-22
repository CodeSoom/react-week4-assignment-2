import ListContainer from '../src/ListContainer';

describe('ListContainer', () => {
  const renderComponent = () => <ListContainer />;
  it('ListContainer 가 렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });
});
