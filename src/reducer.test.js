import { changeInput, registerInput, deleteList } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("renders initial state", () => {
    const state = reducer();

    expect(state.changed).not.toBeNull();
  });

  describe("CHANGE_INPUT", () => {
    it("returns new state in 'changed' state", () => {
      const state = reducer(
        {
          changed: {
            id: "",
            name: "",
            type: "",
            address: "",
          },
        },
        changeInput("한식", "type")
      );

      expect(state.changed.type).toBe("한식");
    });
  });

  describe("REGISTER_INPUT", () => {
    context("when 3 Inputs information completes", () => {
      it("append new Restaurant in 'registered' state", () => {
        const state = reducer(
          {
            changed: {
              id: 1,
              name: "마녀피자",
              type: "양식",
              address: "서울시 강남구",
            },
            registered: [],
          },
          registerInput()
        );

        expect(state.registered).toHaveLength(1);
      });
    });

    context("when Inputs not complete ", () => {
      it("return state", () => {
        const state = reducer(
          {
            changed: {
              id: 1,
              name: "마녀피자",
              type: "",
              address: "서울시 강남구",
            },
            registered: [],
          },
          registerInput()
        );

        expect(state.registered).toHaveLength(0);
      });
    });
  });

  describe("DELETE_LIST", () => {
    it("delete restaurant in 'registered' state list", () => {
      const state = reducer(
        {
          registered: [
            {
              id: 1,
              name: "마녀피자",
              type: "양식",
              address: "서울시 강남구",
            },
            {
              id: 2,
              name: "모던한식",
              type: "한식",
              address: "부산시 해운대구",
            },
          ],
        },
        deleteList(2)
      );

      expect(state.registered).toHaveLength(1);
    });
  });
});
