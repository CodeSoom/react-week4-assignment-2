import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
  });

  const renderApp = () => render(<App />);

  context('제목 렌더링 테스트', () => {
    it('"Restaurants" 텍스트를 화면에 보여준다.', () => {
      const { getByText } = renderApp();

      expect(getByText('Restaurants')).not.toBeNull();
    });
  });
});
