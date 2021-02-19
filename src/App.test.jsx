import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('입력값을 출력합니다.', () => {
    const { getByText } = render((<App />));
    expect(getByText('예약1')).not.toBeNull();
  });
});
