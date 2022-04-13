import { render, fireEvent } from '@testing-library/react';

import RestaurantCategoryInput from './RestaurantCategoryInput';

describe('RestaurantCategoryInput 컴포넌트', () => {
  it('"분류"이라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantCategoryInput />));

    expect(queryByPlaceholderText('분류')).not.toBeNull();
  });

  it('새로운 분류를 입력했을 때 값을 변경하는 이벤트가 동작한다.', () => {
    const handleCategoryChange = jest.fn();

    const { queryByPlaceholderText } = render((
      <RestaurantCategoryInput
        onChange={handleCategoryChange}
      />
    ));

    fireEvent.change(queryByPlaceholderText('분류'), {
      target: { value: '한식' },
    });

    expect(handleCategoryChange).toBeCalled();
  });
});
