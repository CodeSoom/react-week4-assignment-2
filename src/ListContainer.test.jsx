import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('<ListContainer/>', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderListContainer = () => render((
    <ListContainer />
  ));

  it('레스토랑 이름이 보임', () => {
    const { getByText } = renderListContainer();

    expect(getByText(/김밥천국/)).not.toBeNull();
  });
});
