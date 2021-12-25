import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  const renderApp = () => render(<App />);

  context('제목 렌더링 테스트', () => {
    it('"Restaurants" 텍스트를 화면에 보여준다.', () => {
      const { getByText } = renderApp();

      expect(getByText('Restaurants')).not.toBeNull();
    });
  });

  context('Input에 대한 기능 테스트', () => {
    it('"이름", "분류", "장소" input에 값을 입력하면, 화면에 해당 값들이 나타난다.', () => {
      const { getByPlaceholderText, getByDisplayValue } = renderApp();
      const restaurant = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      };
      const { name, category, address } = restaurant;

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

      expect(getByDisplayValue(name)).not.toBeNull();
      expect(getByDisplayValue(category)).not.toBeNull();
      expect(getByDisplayValue(address)).not.toBeNull();
    });

    it('"등록" 버튼을 누르면, "이름", "분류", "장소" input의 값이 초기화된다.', () => {
      const { getByText, getByPlaceholderText, queryByDisplayValue } = renderApp();
      const restaurant = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      };
      const { name, category, address } = restaurant;

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

      fireEvent.click(getByText(/등록/));

      expect(queryByDisplayValue(name)).toBeNull();
      expect(queryByDisplayValue(category)).toBeNull();
      expect(queryByDisplayValue(address)).toBeNull();
    });
  });

  context('List에 대한 기능 테스트', () => {
    it('식당 정보를 등록하면, 화면에 식당 "이름", "분류", "장소"가 나타난다.', () => {
      const { getByText, getByPlaceholderText } = renderApp();
      const restaurant = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      };
      const { name, category, address } = restaurant;

      fireEvent.change(getByPlaceholderText(/이름/), { target: { value: name } });
      fireEvent.change(getByPlaceholderText(/분류/), { target: { value: category } });
      fireEvent.change(getByPlaceholderText(/주소/), { target: { value: address } });

      fireEvent.click(getByText(/등록/));

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/서울시 강남구/)).not.toBeNull();
    });
  });
});
