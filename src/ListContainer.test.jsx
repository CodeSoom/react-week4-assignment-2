import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  given('registers', () => ({
    registers: given.registers,
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({ registers: given.registers }));
  });

  context('with filled registers', () => {
    given('registers', () => [{ id: 1, information: '우리집 | 한식 | 분당구' }]);

    it('shows register lists', () => {
      const { queryByText } = render((<ListContainer />));

      expect(queryByText('우리집 | 한식 | 분당구')).not.toBeNull();
    });

    context('with empty registers', () => {
      given('registers', () => []);

      it('shows nothing', () => {
        const { queryByText } = render((<ListContainer />));

        expect(queryByText('우리집 | 한식 | 분당구')).toBeNull();
      });
    });
  });
});
