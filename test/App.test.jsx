import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import App from '../src/App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
  }));

  const renderApp = () => render((<App />));

  it('App 이 렌더링 된다.', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });
});
