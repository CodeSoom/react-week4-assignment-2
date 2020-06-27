import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');
describe('ListContainer', () => {
  context('with restaurants data', () => {
    it('renders data with restaurants data', () => {
      const dispatch = jest.fn(e => e.preventDefault);

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        restaurants: [{
          id: '100',
          name: '하하',
          category: '호호',
          address: '히히'
        }]
      }));

      const { getByText } = render(<ListContainer/>);

      expect(getByText(/하하/)).not.toBeNull();
    });
  });
});