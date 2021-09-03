import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders a title and input fields by default', () => {
    const { getByText, getByPlaceholderText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/추가/)).not.toBeNull();
  });

  it('changes input values and adds them to the restaurant list', () => {
    const { container, getByText, getByPlaceholderText } = render((
      <App />
    ));

    const inputName = getByPlaceholderText(/이름/);
    const inputCategory = getByPlaceholderText(/분류/);
    const inputAddress = getByPlaceholderText(/주소/);

    const newRestaurant = {
      name: '마녀주방',
      category: '한식',
      address: '서울 강남구',
    };

    const { name, category, address } = newRestaurant;

    fireEvent.change(inputName, { target: { value: name } });
    fireEvent.change(inputCategory, { target: { value: category } });
    fireEvent.change(inputAddress, { target: { value: address } });

    expect(inputName).toHaveAttribute('value', name);
    expect(inputCategory).toHaveAttribute('value', category);
    expect(inputAddress).toHaveAttribute('value', address);

    fireEvent.click(getByText(/추가/));

    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(category);
    expect(container).toHaveTextContent(address);
  });
});
