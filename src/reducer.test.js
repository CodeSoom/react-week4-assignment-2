import reducer from "./reducer";
import { updateRestaurantInfo } from "./action";

describe("reducer", () => {
  describe("updateRestaurantInfo", () => {
    it("changes restautrant name", () => {
      const { state } = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: "", type: "", address: "" },
        },
        updateRestaurantInfo("name", "마녀 식당")
      );

      expect(state.restautrant.name).toBe(/마녀 식당/);
    });

    it("changes restautrant type", () => {
      const { state } = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: "", type: "", address: "" },
        },
        updateRestaurantInfo("type", "한식")
      );

      expect(state.restautrant.type).toBe(/한식/);
    });

    it("changes restautrant address", () => {
      const { state } = reducer(
        {
          id: 100,
          restautrants: [],
          restautrant: { name: "", type: "", address: "" },
        },
        updateRestaurantInfo("address", "서울시 강남구")
      );

      expect(state.restautrant.address).toBe(/서울시 강남구/);
    });
  });
});
