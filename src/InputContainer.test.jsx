/* 계획
1. 아래 input 컴포넌트가 보인다
2. 인풋을 change하고 click하는 기능이 바르게 작동한다
*/
import { fireEvent, render } from "@testing-library/react";

import { useDispatch } from "react-redux";
import InputContainer from "./InputContainer";

import { changeInput, registerInput } from "./actions";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("InputContainer", () => {
  it("render input Component", () => {
    const { getByText } = render(<InputContainer />);

    expect(getByText("확인")).not.toBeNull();
  });

  context("when input changes", () => {
    it("dispatch change action", () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      const { getByPlaceholderText, getByDisplayValue } = render(
        <InputContainer />
      );

      fireEvent.change(getByPlaceholderText("이름"), {
        target: { value: "마녀피자" },
      });

      expect(dispatch).toBeCalledWith(changeInput("마녀피자", "name"));
      expect(getByDisplayValue("마녀피자"));
    });
  });

  context("when input submit", () => {
    it("dispatch register action", () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText("확인"));

      expect(dispatch).toBeCalledWith(registerInput());
    });
  });
});
