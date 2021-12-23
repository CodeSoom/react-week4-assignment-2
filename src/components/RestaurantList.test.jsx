import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('restaurants를 전달하지 않으면 비어있는 리스트를 보여줍니다.', () => {
    const sut = render(<RestaurantList />);

    expect(sut.queryByRole('listitem')).toBeNull();
  });

  it('비어있는 restaurants를 전달하면 비어있는 리스트를 보여줍니다.', () => {
    const sut = render(<RestaurantList restaurants={[]} />);

    expect(sut.queryByRole('listitem')).toBeNull();
  });

  it('restaurants를 전달하면 레스토랑 리스트를 보여줍니다.', () => {
    const stub = [
      {
        id: 0, name: 'foo', category: 'bar', address: 'baz',
      },
    ];
    const sut = render(<RestaurantList restaurants={stub} />);

    const list = sut.queryAllByRole('listitem');
    expect(list).toHaveLength(stub.length);
    expect(list[0].textContent.match(stub[0].name)).not.toBeNull();
    expect(list[0].textContent.match(stub[0].category)).not.toBeNull();
    expect(list[0].textContent.match(stub[0].address)).not.toBeNull();
  });
});
