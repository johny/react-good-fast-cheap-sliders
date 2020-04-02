import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Toggles } from "./toggles";
import { AppContext, AppContextProps } from "../../App";

describe("Toggles", () => {
  const appContext: AppContextProps = {
    state: {
      good: false,
      cheap: false,
      fast: false,
    },
    flipToggle: jest.fn(),
  };

  beforeEach(() => {
    appContext.flipToggle = jest.fn();
  });

  const TestWrapper: React.FC = ({ children }) => (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );

  it("renders 3 toggles", () => {
    const { getAllByTestId } = render(<Toggles />, { wrapper: TestWrapper });
    const inputs = getAllByTestId(/toggle/);
    expect(inputs).toHaveLength(3);
  });

  it("dispatches context action with onChange event", () => {
    const { getByLabelText } = render(<Toggles />, { wrapper: TestWrapper });

    const input = getByLabelText(/good/);
    fireEvent.click(input);

    expect(appContext.flipToggle).toBeCalledWith("good");
  });
});
