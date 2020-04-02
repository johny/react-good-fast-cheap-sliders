import { isValidState, adjustState, TogglesState } from "./useToggles";

describe("useToggles hook", () => {
  describe("state validation", () => {
    it("checks for valid state", () => {
      const state: TogglesState = {
        good: true,
        fast: true,
        cheap: false,
      };

      expect(isValidState(state)).toEqual(true);
    });

    it("returns false for invalid state", () => {
      expect(isValidState({ good: true, fast: true, cheap: true })).toEqual(
        false
      );
    });

    it("adjust the state by flipping on of the other properties", () => {
      const state: TogglesState = {
        good: true,
        fast: true,
        cheap: true,
      };

      const expectedState = {
        ...state,
        good: false,
      };

      expect(adjustState(state, "fast")).toEqual(expectedState);
    });
  });
});
