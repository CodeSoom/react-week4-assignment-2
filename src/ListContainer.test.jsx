import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ListContainer from './ListContainer';

import restaurantList from '../fixtures/restaurantList';

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderListContainer = () => render((<ListContainer />));

  it('입력한 레스토랑 목록이 보인다', () => {
    const { container } = renderListContainer(restaurantList);

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent('김밥지옥');
    expect(container).toHaveTextContent('분식');
    expect(container).toHaveTextContent('강남구');
  });
});
