import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import InputContainer from '../src/InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      nextId: 1,
      name: '',
      category: '',
      address: '',
    }));
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  const renderComponent = () => render(<InputContainer />);
  it('InputContainer 가 렌더링 된다.', () => {
    const { container, getByPlaceholderText } = renderComponent();

    expect(container).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });
});
