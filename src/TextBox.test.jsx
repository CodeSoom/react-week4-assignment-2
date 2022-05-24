import { render } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  it('renders name input box', () => {
    const restaurantInfo = {
      name: '강식당',
      address: '서울',
      category: '양식',
    };
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(
      <TextBox
        onChange={handleChange}
        restaurantInfo={restaurantInfo}
      />,
    );
    const element = getByPlaceholderText('이름');

    expect(element).toHaveValue('강식당');
  });

  it('renders category input box', () => {
    const restaurantInfo = {
      name: '강식당',
      address: '서울',
      category: '양식',
    };
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextBox
        onChange={handleChange}
        restaurantInfo={restaurantInfo}
      />,
    );
    const element = getByPlaceholderText('분류');

    expect(element).toHaveValue('양식');
  });

  it('renders address input box', () => {
    const restaurantInfo = {
      name: '강식당',
      address: '서울',
      category: '양식',
    };
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextBox
        onChange={handleChange}
        restaurantInfo={restaurantInfo}
      />,
    );
    const element = getByPlaceholderText('주소');

    expect(element).toHaveValue('서울');
  });

  it('renders a button', () => {
    const restaurantInfo = {
      name: '강식당',
      address: '서울',
      category: '양식',
    };
    const handleChange = jest.fn();
    const { getByRole } = render(
      <TextBox
        onChange={handleChange}
        restaurantInfo={restaurantInfo}
      />,
    );
    const element = getByRole('button');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(/등록/i);
  });
});
