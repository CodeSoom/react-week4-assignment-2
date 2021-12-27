import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';
import Restaurant from './domain/Restaurant';

jest.mock('react-redux');

function stubSelector(restaurants) {
  useSelector.mockImplementation((selector) => selector({
    tasks: restaurants,
  }));
}

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('restaurants가 없을 경우엔 초기화면이 노출된다', () => {
    stubSelector([]);

    const { getByText } = render((
      <App />
    ));

    expect(getByText('Restaurants')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });

  it('restaurant가 추가되면 목록에 나열된다', () => {
    const expectName = 'New Name';
    const expectCategory = 'New Category';
    const expectAddress = 'New Address';

    stubSelector([Restaurant.newJson(expectName, expectCategory, expectAddress)]);

    const { getAllByRole } = render((
      <App />
    ));

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveTextContent(`${expectName} | ${expectCategory} | ${expectAddress}`);
  });
});
