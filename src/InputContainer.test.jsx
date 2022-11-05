import { render, screen, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

import { updateRestaurant } from './actions';

import restaurantList from '../fixtures/restaurantList';

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderInputContainer = () => render((<InputContainer />));

  function changeInput(placeholder, value) {
    const element = renderInputContainer().getByPlaceholderText(placeholder);

    fireEvent.change(element, {
      target: { value },
    });
  }

  it('InputContainer가 랜더링된다', () => {
    renderInputContainer();

    expect(screen.getByPlaceholderText('이름')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('분류')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('주소')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: '등록' })).toBeInTheDocument();
  });

  it('입력한 레스토랑 이름이 랜더링된다', () => {
    changeInput('이름', '김밥지옥');

    expect(dispatch).toBeCalledWith(updateRestaurant(
      'restaurantName', '김밥지옥',
    ));
  });

  it('입력한 레스토랑 분류가 랜더링된다', () => {
    changeInput('분류', '분식');

    expect(dispatch).toBeCalledWith(updateRestaurant(
      'category', '분식',
    ));
  });

  it('입력한 레스토랑 주소가 랜더링된다', () => {
    changeInput('주소', '김밥시 김밥구');

    expect(dispatch).toBeCalledWith(updateRestaurant(
      'address', '김밥시 김밥구',
    ));
  });

  it('등록 버튼을 누르면 addRestaurant가 호출된다', () => {
    renderInputContainer();

    fireEvent.click(screen.getByText('등록'));
    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });
});
