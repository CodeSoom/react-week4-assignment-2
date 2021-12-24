import { changeInput, registerInput } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("renders initial state", () => {
    const state = reducer();

    expect(state.changed).not.toBeUndefined();
  });

  describe("CHANGE_INPUT", () => {
    it("returns new state in 'changed' state", () => {
      const state = reducer(
        {
          changed: {
            name: "",
            type: "",
            address: "",
          },
        },
        changeInput("한식", 2)
      );

      expect(state.changed.type).toBe("한식");
    });
  });

  describe("REGISTER_INPUT", () => {
    it("append new Restaurant in 'registered' state", () => {
      const state = reducer(
        {
          registered: [
            {
              name: "마녀피자",
              type: "양식",
              address: "부산시 남포동",
            },
          ],
        },
        registerInput()
      );

      expect(state.registered).toHaveLength(1);
    });
  });

  describe("DELETE_LIST", () => {
    it("delete restaurant in 'registered' state list", () => {
      const state = reducer(
        {
          registed: [
            { id: 1, name: "마녀피자", type: "양식", address: "서울시 강남구" },
            {
              id: 2,
              name: "모던한식",
              type: "한식",
              address: "부산시 해운대구",
            },
          ],
        },
        deleteInput(2)
      );

      expect(state.registed).toHaveLength(1);
    });
  });
});
