// 여러 개의 정보를 입력할 수 있다. => dispatch 요청 
// => ? 얘는 여러개인데..
// "등록" 버튼을 클릭 할 수 있다. => dispatch 요청

// 이름 / 분류 / 주소
// 마녀주방 / 한식 / 서울시 강남구


import { fireEvent, render } from "@testing-library/react"

import { useDispatch} from "react-redux"

import InputsContainer from "./InputsContainer";

import { updateRestaurantInfo } from "./action";

jest.mock('react-redux')

describe("InputsContainer", () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    it('여러 input 의 값을 입력하면, 입력한 input 의 key 와 value 와 함께 dispatch 를 요청한다.', () => {
        const { getByPlaceholderText } = render(<InputsContainer />)

        const nameInput = getByPlaceholderText(/이름/)
        const typeInput = getByPlaceholderText(/분류/)
        const addressInput = getByPlaceholderText(/주소/)
        
        // 마녀주방 / 한식 / 서울시 강남구
        fireEvent.change(nameInput, { target: { value: '마녀주방' } })
        fireEvent.change(typeInput, { target: { value: '한식' } })
        fireEvent.change(addressInput, { target: { value: '서울시 강남구' } })

        expect(dispatch).toBeCalledWith(updateRestaurantInfo('key', 'value'));
    })
})