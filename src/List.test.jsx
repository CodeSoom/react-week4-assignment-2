import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with reservations', () => {
    it('list reservations', () => {
      const reservations = [
        { name: '대천부양꼬치', type: '중식', address: '경기도 남양주시' },
        { name: '바토스', type: '양식', address: '이태원동' },
      ];

      const { getByText } = render((
        <List reservations={reservations} />
      ));

      expect(getByText('대천부양꼬치 | 중식 | 경기도 남양주시')).not.toBeNull();
      expect(getByText('바토스 | 양식 | 이태원동')).not.toBeNull();
    });
  });
  context('without reservations', () => {
    it('renders nothing', () => {
      const reservations = [];

      const { getByRole } = render(
        <List reservations={reservations} />,
      );

      expect(getByRole('list')).toBeEmptyDOMElement();
    });
  });
});
