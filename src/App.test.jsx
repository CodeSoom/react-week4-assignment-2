import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from './App';

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
});
