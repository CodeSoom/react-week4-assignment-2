import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("render", () => {
    const { getByPlaceholderText, getByRole } = render(
      <Input restautrant={{}} />
    );

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole("button", { name: /추가/ })).toBeInTheDocument();
  });

  it("각각의 입렵 란은 전달 받은 값을 렌더링한다.", () => {
    const restautrant = {
      name: "마녀 식당",
      type: "한식",
      address: "서울시 강남구",
    };
    const { getByPlaceholderText } = render(
      <Input restautrant={restautrant} />
    );

    expect(getByPlaceholderText(/이름/)).toHaveAttribute(
      "value",
      restautrant.name
    );
    expect(getByPlaceholderText(/분류/)).toHaveAttribute(
      "value",
      restautrant.type
    );
    expect(getByPlaceholderText(/주소/)).toHaveAttribute(
      "value",
      restautrant.address
    );
  });
});
