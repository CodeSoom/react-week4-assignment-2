import { render } from '@testing-library/react';

import List from './List';

import restaurants from './fixtures/restaurants';

describe('<List/>', () => {
  const renderList = (infomation) => render((
    <List restaurants={infomation} />
  ));

  context('입력된 레스토랑이 있을 때', () => {
    it('레스토랑 목록이 보임', () => {
      const { queryByText } = renderList(restaurants);

      expect(queryByText(/김밥천국/)).toBeInTheDocument();
    });
  });

  context('입력된 레스토랑이 없을 때', () => {
    it('레스토랑 목록이 안 보임', () => {
      const { container } = renderList([]);

      expect(container).not.toHaveTextContent(/김밥천국/);
    });
  });
});
