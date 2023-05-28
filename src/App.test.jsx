import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  jest.mock('react-redux');
  useSelector.mockImplementation((selector) => selector({
    title: '투썸플레이스',
    sort: '카페',
    location: '신도림',
    restaurants: [{
      id: 100,
      title: '삼겹살',
      sort: '고기',
      location: '강남',
    }],
  }));

  it('header가 보인다', () => {
    const { getByText } = renderApp();
    expect(getByText('Restaurants')).not.toBeNull();
  });

  describe('ListContainer가 렌더링된다.', () => {
    it('리스트들이 보인다', () => {
      const { getByText } = renderApp();

      expect(getByText('삼겹살')).not.toBeNull();
      expect(getByText('고기')).not.toBeNull();
      expect(getByText('강남')).not.toBeNull();
    });
  });

  describe('FormContainer가 렌더링된다.', () => {
    describe('input 값이 변경되면', () => {
      it('input에 입력된 값이 보인다.', () => {
        const { getByDisplayValue } = renderApp();
        expect(getByDisplayValue('투썸플레이스')).not.toBeNull();
        expect(getByDisplayValue('카페')).not.toBeNull();
        expect(getByDisplayValue('신도림')).not.toBeNull();
      });
    });

    describe('Button이 클릭되면', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      it('reducer 함수를 호출한다.', () => {
        const { getByText } = renderApp();
        fireEvent.click(getByText('등록'));
        expect(dispatch).toBeCalledWith({
          type: 'ADD_RESTAURANT',
        });
      });
    });
  });
});
