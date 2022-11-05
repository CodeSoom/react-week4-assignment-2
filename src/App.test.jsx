import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';
import updateRestaurant from './actions';

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

  it('App이 랜더링된다', () => {
    renderApp();

    expect(screen.getByText('Restaurants')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('이름')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('분류')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('주소')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  context('레스토랑 정보를 입력하면', () => {
    it('입력한 이름이 랜더링 된다', () => {
      renderApp();

      const input = screen.getByPlaceholderText('이름');

      fireEvent.change(input, {
        target: { value: '김밥천국' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurant(
        'restaurantName', '김밥천국',
      ));
    });

    it('입력한 분류가 랜더링 된다', () => {
      renderApp();

      const input = screen.getByPlaceholderText('분류');

      fireEvent.change(input, {
        target: { value: '분식' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurant(
        'category', '분식',
      ));
    });

    it('입력한 주소가 랜더링 된다', () => {
      renderApp();

      const input = screen.getByPlaceholderText('주소');

      fireEvent.change(input, {
        target: { value: '김밥나라 김밥시' },
      });

      expect(dispatch).toBeCalledWith(updateRestaurant(
        'address', '김밥나라 김밥시',
      ));
    });
  });
});
