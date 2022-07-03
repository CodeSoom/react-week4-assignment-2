import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('<App />', () => {
  useSelector.mockImplementation((selector) => selector({}));

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
});
