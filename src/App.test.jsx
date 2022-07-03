import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  const renderApp = () => render((<App />));

  it('앱의 제목이 보인다.', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('Restaurants');
  });

  it('레스토랑 이름을 입력할 수 있는 input이 보인다.', () => {
    const { getByPlaceholderText } = renderApp();

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
  });
});
