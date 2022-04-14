import { render } from '@testing-library/react';

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

  it('이름,분류,주소 input과 등록 button이 있다.', () => {
    const { queryByPlaceholderText, queryByText } = renderRestaurantRegisterForm();

    expect(queryByPlaceholderText(/이름/)).not.toBeNull();
    expect(queryByPlaceholderText(/분류/)).not.toBeNull();
    expect(queryByPlaceholderText(/주소/)).not.toBeNull();
    expect(queryByText(/등록/)).not.toBeNull();
  });
});
