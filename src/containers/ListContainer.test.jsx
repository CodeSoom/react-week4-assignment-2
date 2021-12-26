import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const renderListContainer = () => render(<ListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
    }));
  });

  context('식당 정보가 없으면', () => {
    it('아무 것도 화면에 나타나지 않는다.', () => {
      const { container } = renderListContainer();

      expect(container).toHaveTextContent('');
    });
  });

  context('식당 정보가 있으면', () => {
    it('식당 정보들이 화면에 나타난다.', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [{
          name: '이름-1',
          category: '분류-1',
          address: '주소-1',
        }],
      }));

      const { queryByText } = renderListContainer();

      expect(queryByText(/이름-1/)).not.toBeNull();
      expect(queryByText(/분류-1/)).not.toBeNull();
      expect(queryByText(/주소-1/)).not.toBeNull();
    });
  });
});
