import Restaurant from '../Restaurant';

describe('Restaurant', () => {
  it('toJSON을 호출하면 Instance가 JSON으로 변환된다', () => {
    const expectName = 'name';
    const expectCategory = 'category';
    const expectAddress = 'address';
    const sut = new Restaurant(expectName, expectCategory, expectAddress);

    const result = sut.toJSON();

    expect(result.name).toBe(expectName);
    expect(result.category).toBe(expectCategory);
    expect(result.address).toBe(expectAddress);
  });
});
