import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  it("render", () => {
    const { getByPlaceholderText, getByRole } = render(<Input />);

    expect(getByPlaceholderText(/이름/)).toBeInTheDocument();
    expect(getByPlaceholderText(/분류/)).toBeInTheDocument();
    expect(getByPlaceholderText(/주소/)).toBeInTheDocument();
    expect(getByRole("button", { name: /추가/ })).toBeInTheDocument();
  });
});
