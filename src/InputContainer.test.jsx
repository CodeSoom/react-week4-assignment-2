/* 계획
1. 아래 input 컴포넌트가 보인다
2. 인풋을 change하고 click하는 기능이 바르게 작동한다
*/
import { fireEvent, render } from "@testing-library/react";

import InputContainer from "./InputContainer";

describe("InputContainer", () => {
  it("render input Component", () => {
    const { getByText } = render(<InputContainer />);

    expect(getByText("등록")).not.toBeUndefined();
  });

  context("input changes", () => {
    it("calls 'handleChange' Function", () => {
      const log = jest.spyOn(globalThis.console, "log");
      const { getByPlaceholderText } = render(<InputContainer />);

      fireEvent.change(getByPlaceholderText("이름"), {
        target: { value: "마녀피자" },
      });

      expect(log).toBeCalled();
    });
  });

  context("input submit", () => {
    it("calls 'handleClick' Function", () => {
      const log = jest.spyOn(globalThis.console, "log");
      const { getByText } = render(<InputContainer />);

      fireEvent.click(getByText("등록"));

      expect(log).toBeCalled();
    });
  });
});
