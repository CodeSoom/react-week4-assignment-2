import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantName: '김밥나라',
  }));

  const renderApp = () => {
    render((<App />));
  };

  it('App이 잘 랜더링 되는가', () => {
    renderApp();

    expect(screen.getByText('Restaurants')).toBeInTheDocument();
  });

  describe('입력한 레스토랑 이름이 랜더링 된다', () => {
    renderApp();

    const input = screen.getByPlaceholderText('이름');

    fireEvent.change(input, {
      target: {
        value: '김밥나라',
      },
    });
  });
});
