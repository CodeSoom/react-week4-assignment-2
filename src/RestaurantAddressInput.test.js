import { render } from '@testing-library/react';
import RestaurantAddressInput from './RestaurantAddressInput';

describe('RestaurantAddressInput 컴포넌트', () => {
  it('"주소"라는 placeholderText를 가진 input 요소를 가지고 있다.', () => {
    const { queryByPlaceholderText } = render((<RestaurantAddressInput />));

    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });
});
