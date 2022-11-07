import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantLists from '../fixtures/restaurantLists';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  function renderListContainer() {
    return render((<ListContainer />));
  }

  useSelector.mockImplementation((selector) => selector({ restaurantLists }));

  it('ListContainer가 렌더링된다.', () => {
    const { container } = renderListContainer();

    expect(container).toHaveTextContent('양키통닭');
  });
});
