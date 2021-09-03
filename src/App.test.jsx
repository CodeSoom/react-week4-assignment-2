import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 0,
      title: ['롯데리아 | 양식 | 서울시 영등포구'],
    }],
  }));

  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders name input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantName = getByLabelText('restaurantName');

    expect(restaurantName).not.toBeNull();
  });

  it('renders category input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantCategory = getByLabelText('restaurantCategory');

    expect(restaurantCategory).not.toBeNull();
  });

  it('renders address input field', () => {
    const { getByLabelText } = render(<App />);

    const restaurantAddress = getByLabelText('restaurantAddress');

    expect(restaurantAddress).not.toBeNull();
  });

  it('renders 등록 button', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('등록');
  });

  it('renders restaurant lists when restaurant added', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('롯데리아 | 양식 | 서울시 영등포구');
  });
});
