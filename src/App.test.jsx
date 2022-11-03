import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const renderApp = () => {
    render((<App />));
  };

  it('App이 잘 랜더링 되는가', () => {
    renderApp();

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
