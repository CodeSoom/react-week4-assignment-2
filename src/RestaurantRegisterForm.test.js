import { render, fireEvent } from '@testing-library/react';

import RestaurantRegisterForm from './RestaurantRegisterForm';

// TODO : 이름,분류,주소 input과 등록 버튼을 하나의 form 처럼 사용할 컨테이너
describe('<RestaurantRegisterForm/>', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderRestaurantRegisterForm() {
    return render((
      <RestaurantRegisterForm
        name=""
        category=""
        address=""
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('레스토랑의 이름,분류,주소 input과 등록 button이 있다.', () => {
    const { queryByPlaceholderText, queryByText } = renderRestaurantRegisterForm();

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('레스토랑의 이름을 입력할 수 있다.', () => {
    const { queryByPlaceholderText } = renderRestaurantRegisterForm();

    fireEvent.change(queryByPlaceholderText(/이름/), {
      target: { value: '미스터 피자' },
    });

    expect(handleChange).toBeCalled();
  });

  it('레스토랑의 분류를 입력할 수 있다.', () => {
    const { queryByPlaceholderText } = renderRestaurantRegisterForm();

    fireEvent.change(queryByPlaceholderText(/분류/), {
      target: { value: '양식' },
    });

    expect(handleChange).toBeCalled();
  });

  it('레스토랑의 주소를 입력할 수 있다.', () => {
    const { queryByPlaceholderText } = renderRestaurantRegisterForm();

    fireEvent.change(queryByPlaceholderText(/주소/), {
      target: { value: '강남역' },
    });

    expect(handleChange).toBeCalled();
  });

  it('등록 버튼을 클릭하면 레스토랑 등록 이벤트가 동작한다.', () => {
    const { getByText } = renderRestaurantRegisterForm();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});
