import { render, fireEvent } from '@testing-library/react';

import RestaurantAddressInput from './RestaurantAddressInput';

describe('RestaurantAddressInput 컴포넌트', () => {
  it('"주소"라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantAddressInput />));

    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('새로운 주소를 입력했을 때 값을 변경하는 이벤트가 동작한다.', () => {
    const handleAddressChange = jest.fn();

    const { queryByPlaceholderText } = render((
      <RestaurantAddressInput
        onChange={handleAddressChange}
      />
    ));

    fireEvent.change(queryByPlaceholderText('주소'), {
      target: { value: '서울시 송파구' },
    });

    expect(handleAddressChange).toBeCalled();
  });
});
