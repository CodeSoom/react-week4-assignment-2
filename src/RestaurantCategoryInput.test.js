import { render } from '@testing-library/react';

import RestaurantCategoryInput from './RestaurantCategoryInput';

describe('RestaurantCategoryInput 컴포넌트', () => {
  it('"분류"이라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantCategoryInput />));

    expect(queryByPlaceholderText('분류')).toBeVisible();
  });
});
