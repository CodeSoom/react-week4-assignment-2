/* 계획
1. 리스트 항목을 잘 보여준다
*/
import { render } from "@testing-library/react";

import ListContainer from "./ListContainer";

import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("ListContainer", () => {
  it("render list content", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        registered: [
          {
            name: "칠암아나고",
            type: "수산업",
            address: "부산시 기장군",
          },
        ],
      })
    );

    const { getByText } = render(<ListContainer />);

    expect(getByText(/아나고/)).not.toBeNull();
  });
});
