import { render } from '@testing-library/react';
import Input from '../src/Input';

describe('Input', () => {
  const renderComponent = ({ name, category, address } = {}) => render(<Input
    name={name}
    category={category}
    address={address}
  />);

  it('Input 컴포넌트가 렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('props 로 넘겨받은 값이 입력창에 노출된다.', () => {
    const { getByPlaceholderText } = renderComponent({
      name: '마녀주방',
      category: '한식',
      address: '경기도',
    });

    expect(getByPlaceholderText(/이름/)).toHaveValue('마녀주방');
    expect(getByPlaceholderText(/분류/)).toHaveValue('한식');
    expect(getByPlaceholderText(/주소/)).toHaveValue('경기도');
  });
});
