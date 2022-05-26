import { render } from '@testing-library/react';
import TextBox from './TextBox';

describe('TextBox', () => {
  describe('name input', () => {
    context('without restaurantInfo.name', () => {
      it('returns empty value', () => {
        const { getByPlaceholderText } = render(<TextBox restaurantInfo={{}} />);
        expect(getByPlaceholderText('이름')).toHaveValue('');
      });
    });
    context('with restaurantInfo.name', () => {
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
        const element = getByPlaceholderText('이름');

        expect(element).toHaveValue('강식당');
      });
    });
  });

  describe('category input', () => {
    context('without restaurantInfo.category', () => {
      it('returns empty value', () => {
        const { getByPlaceholderText } = render(<TextBox restaurantInfo={{}} />);
        expect(getByPlaceholderText('분류')).toHaveValue('');
      });
    });
    context('with restaurantInfo.category', () => {
      it('returns value stored "한식"', () => {
        const restaurantInfo = {
          name: '강식당',
          address: '서울',
          category: '한식',
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
        const element = getByPlaceholderText('분류');

        expect(element).toHaveValue('한식');
      });
    });

    describe('address input', () => {
      context('without restaurantInfo.address', () => {
        it('returns empty value', () => {
          const { getByPlaceholderText } = render(<TextBox restaurantInfo={{}} />);
          expect(getByPlaceholderText('주소')).toHaveValue('');
        });
      });
      context('with restaurantInfo.address', () => {
        it('returns value stored "서울"', () => {
          const restaurantInfo = {
            name: '강식당',
            address: '서울',
            category: '한식',
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
          const element = getByPlaceholderText('주소');

          expect(element).toHaveValue('서울');
        });
      });
    });

    it('renders a button', () => {
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
      const element = getByRole('button');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(/등록/i);
    });
  });
});
