import { render } from '@testing-library/react';

import List from './List';

// List test
// 목적: restuarants가 없을 땐 빈화면, restuarants가 있을 땐 화면에 text를 렌더하는가?

// 1. without restuarants
//  - renders nothing
// 2. with restuarants
//  - renders text(이름, 분류, 주소)

describe('List', () => {
  const renderList = (restuarants) => render(
    <List
      restuarants={restuarants}
    />,
  );

  context('without restuarants', () => {
    it('renders nothing', () => {
      const restuarants = [];

      const { container } = renderList(restuarants);

      expect(container).toHaveTextContent('');
    });
  });

  context('with restuarants', () => {
    it('renders text(이름, 분류, 주소)', () => {
      const restuarants = [
        { name: '이름', category: '분류', address: '주소' },
      ];

      const { container } = renderList(restuarants);

      expect(container).toHaveTextContent('이름');
      expect(container).toHaveTextContent('분류');
      expect(container).toHaveTextContent('주소');
    });
  });
});
