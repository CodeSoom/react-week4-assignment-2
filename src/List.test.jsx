/* import { render } from '@testing-library/react';

import List from './List';

// List test
// 목적: infos가 없을 땐 빈화면, infos가 있을 땐 화면에 text를 렌더하는가?

// Button: infos
// 1. without infos
//  - renders nothing
// 2. with infos
//  - renders text(이름, 분류, 주소)

describe('List', () => {
  const renderList = (infos) => render(
    <List
      infos={infos}
    />,
  );

  context('without infos', () => {
    it('renders nothing', () => {
      const infos = [];

      const { container } = renderList(infos);

      expect(container.infos).toHaveLength(0);
    });
  });

  context('with infos', () => {
    it('renders text(이름, 분류, 주소)', () => {
      const infos = [
        { id: 1, title: '모토쿠라시' },
        { id: 2, title: '일식' },
        { id: 3, title: '송파구' },
      ];

      const { container } = renderList(infos);

      expect(container.infos).toHaveLength(3);
    });
  });
}); */
