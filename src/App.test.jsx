import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurantName: '',
    restaurantCategory: '',
    restaurantAddress: '',
    restaurantCatalog: [],
  }));

  const renderApp = () => render(<App />);

  it("App의 제목인 'Restaurant'라는 텍스트와 input 창을 렌더한다", () => {
    const { container, getByPlaceholderText } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
  });

  it('이름, 분류, 주소 placeholder에 원하는 값을 입력한다', () => {
    const { container, getByPlaceholderText } = renderApp();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀식당' },
    });
    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: '한식' },
    });
    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: '서울시 강남구' },
    });

    expect(container).toBeVisible('마녀식당');
    expect(container).toBeVisible('한식');
    expect(container).toBeVisible('서울시 강남구');
  });

  it('이름, 분류, 주소를 입력하고 등록 버튼을 누르면 input은 초기화하고 목록을 추가한다', () => {
    const { container, getByPlaceholderText, getByRole } = renderApp();
    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀식당' },
    });
    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: '한식' },
    });
    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: '서울시 강남구' },
    });

    fireEvent.click(getByRole('button'));

    expect(container).not.toHaveTextContent('마녀식당');
    expect(container).not.toHaveTextContent('한식');
    expect(container).not.toHaveTextContent('서울시 강남구');
  });
});
