import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import restaurantList from '../fixtures/restaurantList';

describe('Input', () => {
  const dispatch = jest.fn();

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderInput = () => render((
    <Input
      restaurantName="김밥나라"
      category="분식"
      address="중량구"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  context('레스토랑 정보를 입력하면', () => {
    it('handleChange가 호출된다', () => {
      renderInput();
      expect(screen.getByDisplayValue('김밥나라')).not.toBeNull();

      fireEvent.change(screen.getByPlaceholderText('이름'), {
        target: { value: '김밥천국' },
      });

      expect(handleChange).toBeCalled();
    });

    it('등록 버튼이 랜더링된다', () => {
      renderInput();
      expect(screen.getByDisplayValue('김밥나라')).not.toBeNull();

      fireEvent.click(screen.getByText('등록'));

      expect(handleSubmit).toBeCalled();
    });
    //   renderInput();

    //   const input = screen.getByPlaceholderText('분류');

    //   fireEvent.change(input, {
    //     target: { value: '분식' },
    //   });

    //   expect(dispatch).toBeCalledWith(updateRestaurant(
    //     'category', '분식',
    //   ));
    // });

    // it('입력한 주소가 랜더링 된다', () => {
    //   renderInput();

    //   const input = screen.getByPlaceholderText('주소');

    //   fireEvent.change(input, {
    //     target: { value: '김밥나라 김밥시' },
    //   });

    //   expect(dispatch).toBeCalledWith(updateRestaurant(
    //     'address', '김밥나라 김밥시',
    //   ));
    // });
  });
});
