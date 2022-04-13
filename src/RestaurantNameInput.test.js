import { render, fireEvent } from '@testing-library/react';

import RestaurantNameInput from './RestaurantNameInput';

describe('RestaurantNameInput 컴포넌트', () => {
  it('"이름"이라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantNameInput />));

    expect(queryByPlaceholderText('이름')).not.toBeNull();
  });

  it('새로운 이름을 입력했을 때 값을 변경하는 이벤트가 동작한다.', () => {
    const handleNameChange = jest.fn();

    const { queryByPlaceholderText } = render((
      <RestaurantNameInput
        onChange={handleNameChange}
      />
    ));

    fireEvent.change(queryByPlaceholderText('이름'), {
      target: { value: '연안식당' },
    });

    expect(handleNameChange).toBeCalled();
  });
});
