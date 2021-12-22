import { render } from '@testing-library/react';

import RestaurantForm from '.';

describe('RestaurantForm', () => {
  it('renders inputs and submit button', () => {
    const { getByPlaceholderText, getByText } = render(<RestaurantForm />);

    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('분류')).toBeInTheDocument();
    expect(getByPlaceholderText('주소')).toBeInTheDocument();
    expect(getByText('등록')).toBeInTheDocument();
  });
});
