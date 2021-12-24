/* 계획
1. 아래 input 컴포넌트가 보인다
2. 인풋을 change하고 click하는 기능이 바르게 작동한다
*/
import { fireEvent, render } from "@testing-library/react";

import InputContainer from "./InputContainer";

import { useDispatch } from "react-redux";
import { changeInput, registerInput } from "./actions";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("InputContainer", () => {
  it("render input Component", () => {
    const { getByText } = render(<InputContainer />);

    expect(getByText("등록")).not.toBeNull();
  });

  context("when input changes", () => {
    it("dispatch change action", () => {
      useDispatch.mockImplementation(() => dispatch);
      const dispatch = useDispatch;
      const { getByPlaceholderText, getByDisplayValue } = render(
        <InputContainer />
      );

      fireEvent.change(getByPlaceholderText("이름"), {
        target: { value: "마녀피자" },
      });

      expect(dispatch).toBeCalledWith(changeInput("마녀피자"));
      expect(getByDisplayValue("마녀피자"));
    });
  });

  context("when input submit", () => {
    it("dispatch register action", () => {
      useDispatch.mockImplementation(() => dispatch);
      const dispatch = useDispatch;
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText("등록"));

      expect(dispatch).toBeCalledWith(registerInput());
    });
  });
});
