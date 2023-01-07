import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('레스토랑 리스트를 화면에 렌더한다.', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('레스토랑 등록 폼을 화면에 렌더한다.', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });
});
