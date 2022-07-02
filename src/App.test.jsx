import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('앱의 제목이 보인다.', () => {
    const { container } = render((<App />));

    expect(container).toHaveTextContent('Restaurants');
  });
});
