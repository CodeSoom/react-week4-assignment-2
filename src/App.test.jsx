import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render(<App />);
  }

  it('renders input placeholder', () => {
    const { queryByPlaceholderText } = renderApp();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('listens change events', () => {
    const { queryByDisplayValue, getByPlaceholderText } = renderApp();

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

    expect(queryByDisplayValue('마녀주방')).not.toBeNull();
    expect(queryByDisplayValue('한식')).not.toBeNull();
    expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  });

  it('renders button', () => {
    const { queryByText } = renderApp();

    expect(queryByText('등록')).not.toBeNull();
  });

  it('listens "등록" button submit events', () => {
    const { queryByText, getByPlaceholderText } = renderApp();

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

    fireEvent.submit(queryByText('등록'));

    expect(queryByText('마녀주방')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('서울시 강남구')).not.toBeNull();
  });
});
