import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('레스토랑 정보가 없다면', () => {
    it('화면에 아무것도 나타나지 않는다.', () => {
      const informations = [];

      useSelector.mockImplementation((selector) => selector({
        informations,
      }));

      const { container } = render((
        <ListContainer
          informations={informations}
        />
      ));

      expect(container).toHaveTextContent('');
    });
  });

  context('레스토랑 정보가 있다면', () => {
    it('화면에 레스토랑 정보를 보여준다.', () => {
      const informations = [
        {
          id: 1,
          name: '마녀주방',
          category: '한식',
          address: '강남',
        },
        {
          id: 2,
          name: '할머니뼈해장국',
          category: '한식',
          address: '강서',
        },
      ];

      useSelector.mockImplementation((selector) => selector({
        informations,
      }));

      const { container, getAllByText } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent(/마녀주방/);
      expect(container).toHaveTextContent(/할머니뼈해장국/);
      expect(getAllByText(/한식/)[0]).not.toBeNull();
      expect(container).toHaveTextContent(/강서/);
      expect(container).toHaveTextContent(/강남/);
    });
  });
});
