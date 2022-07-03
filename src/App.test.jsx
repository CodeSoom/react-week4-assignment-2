import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import App from './App';

import RESTAURANTS from './fixtures/restaurants';

jest.mock('react-redux');

describe('<App />', () => {
  given('restaurants', () => []);

  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
  }));

  const renderApp = () => render((<App />));

  it('앱의 제목이 보인다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
  });

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });

  it('레스토랑 분류를 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('분류')).toBeInTheDocument();
  });

  it('레스토랑 주소를 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  it('등록 버튼이 보인다.', () => {
    const { getByText } = renderApp();

    expect(getByText('등록')).toBeInTheDocument();
  });

  context('레스토랑 목록이 있을 경우', () => {
    it('레스토랑 목록이 보인다.', () => {
      given('restaurants', () => RESTAURANTS);

      const { container } = renderApp();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
        expect(container).toHaveTextContent(restaurant.category);
        expect(container).toHaveTextContent(restaurant.address);
      });
    });
  });

  context('레스토랑 목록이 없을 경우', () => {
    it('"레스토랑을 추가해주세요!" 텍스트가 보인다.', () => {
      given('restaurants', () => []);

      const { container } = renderApp();

      expect(container).toHaveTextContent('레스토랑을 추가해주세요!');
    });
  });
});
