import { render, fireEvent } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  describe('input', () => {
    context('without restaurantInfo', () => {
      it('returns empty value', () => {
        const { getByPlaceholderText } = render(<TextBox restaurantInfo={{
          name: '',
          category: '',
          address: '',
        }}
        />);
        expect(getByPlaceholderText('이름')).toHaveValue('');
        expect(getByPlaceholderText('분류')).toHaveValue('');
        expect(getByPlaceholderText('주소')).toHaveValue('');
      });
    });
    context('with restaurantInfo', () => {
      it('returns value stored "강식당"', () => {
        const restaurantInfo = {
          name: '강식당',
          address: '서울',
          category: '양식',
        };
        const handleChange = jest.fn();
        const handleClick = jest.fn();

        const { getByPlaceholderText } = render(
          <TextBox
            onChange={handleChange}
            onClick={handleClick}
            restaurantInfo={restaurantInfo}
          />,
        );

        expect(getByPlaceholderText('이름')).toHaveValue('강식당');
        expect(getByPlaceholderText('분류')).toHaveValue('양식');
        expect(getByPlaceholderText('주소')).toHaveValue('서울');
      });
    });
  });
  describe('button', () => {
    context('without restaurantInfo', () => {
      it('returns empty value', () => {
        const handleClick = jest.fn();
        const handleChange = jest.fn();
        const { getByRole } = render(<TextBox
          onClick={handleClick}
          onChange={handleChange}
          restaurantInfo={{
            name: '',
            category: '',
            address: '',
          }}
        />);
        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
      });
    });
    context('with restaurantInfo', () => {
      it('returns value stored "강식당"', () => {
        const restaurantInfo = {
          name: '강식당',
          address: '서울',
          category: '양식',
        };
        const handleChange = jest.fn();
        const handleClick = jest.fn();

        const { getByRole } = render(
          <TextBox
            onChange={handleChange}
            onClick={handleClick}
            restaurantInfo={restaurantInfo}
          />,
        );

        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
      });
    });
  });
});
