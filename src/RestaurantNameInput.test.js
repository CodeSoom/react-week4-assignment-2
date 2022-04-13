import { render } from '@testing-library/react';

import RestaurantNameInput from './RestaurantNameInput';

describe('RestaurantNameInput 컴포넌트', () => {
  it('"이름"이라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantNameInput />));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
  });
});
