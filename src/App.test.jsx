import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

/**
 * input이 렌더링 되는지?
 */

describe('App', () => {
  it('renders input placeholder', () => {
    const { getByPlaceholderText } = render(<App />);

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByDisplayValue, getByPlaceholderText } = render(<App />);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: {
        value: '마녀주방',
      },
    });

    fireEvent.change(getByPlaceholderText('분류'), {
      target: {
        value: '한식',
      },
    });

    fireEvent.change(getByPlaceholderText('주소'), {
      target: {
        value: '서울시 강남구',
      },
    });

    expect(getByDisplayValue('마녀주방')).not.toBeNull();
    expect(getByDisplayValue('한식')).not.toBeNull();
    expect(getByDisplayValue('서울시 강남구')).not.toBeNull();
  });

  it('renders button', () => {
    const { getByText } = render(<App />);

    expect(getByText('등록')).not.toBeNull();
  });
});
