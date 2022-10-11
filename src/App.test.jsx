import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

function setState(listInfo = {}) {
  useSelector.mockImplementation((selector) => selector(
    listInfo,
  ));
}

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title', () => {
    setState({
      shopName: '',
      shopType: '',
      shopAddress: '',
      restaurants: [],
    });

    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders input component', () => {
    setState({
      shopName: '',
      shopType: '',
      shopAddress: '',
      restaurants: [],
    });

    const { getByLabelText, getByText } = render((
      <App />
    ));

    expect(getByLabelText(/레스토랑명/)).not.toBeNull();
    expect(getByLabelText(/레스토랑 타입/)).not.toBeNull();
    expect(getByLabelText(/주소/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });

  context('with restaurants list', () => {
    it('renders list information', () => {
      setState({
        restaurants: [
          {
            id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
          },
        ],
      });

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/서울시 강남구/)).not.toBeNull();
    });
  });

  context('without restaurants list', () => {
    it('renders text : no list', () => {
      setState({
        restaurants: [],
      });

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/레스토랑 목록이 없습니다./)).not.toBeNull();
    });
  });
});
