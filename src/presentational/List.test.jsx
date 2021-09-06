import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders restaurants', () => {
    const restaurants = [
      {
        id: 0,
        title: '맥도날드 | 양식 | 서울시 양천구',
      }, {
        id: 1,
        title: '맘스터치 | 양식 | 서울시 종로구',
      },
    ];

    const { container } = render((
      <List restaurants={restaurants} />
    ));

    expect(container).toHaveTextContent('맥도날드 | 양식 | 서울시 양천구');
    expect(container).toHaveTextContent('맘스터치 | 양식 | 서울시 종로구');
  });
});
