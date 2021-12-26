import RestaurantState from '../RestaurantState';

describe('RestaurantState', () => {
  it('toJsonWith를 호출하면 restaurant가 추가된다 ', () => {
    const expectName = 'name';
    const expectCategory = 'category';
    const expectAddress = 'address';
    const state = new RestaurantState(expectName, expectCategory, expectAddress, []).toJSON();

    const { restaurants } = RestaurantState.toJsonWith(state);

    expect(restaurants).toHaveLength(1);
    expect(restaurants[0].name).toBe(expectName);
    expect(restaurants[0].category).toBe(expectCategory);
    expect(restaurants[0].address).toBe(expectAddress);
  });
});
