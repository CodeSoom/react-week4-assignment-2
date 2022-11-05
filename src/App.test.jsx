import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';
import restaurantList from '../fixtures/restaurantList';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderApp = () => {
    render((<App />));
  };

  it('App이 랜더링된다', () => {
    renderApp();

    expect(screen.getByText('Restaurants')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('이름')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('분류')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('주소')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });
});
