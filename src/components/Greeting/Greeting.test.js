// Arrange => Act => Assert

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component:", () => {
  test("Render Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello world!", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Text before change", () => {
    render(<Greeting />);
    const textBeforeChangeElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(textBeforeChangeElement).toBeInTheDocument();
  });

  test("Text after changed", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElm = screen.getByRole("button");
    userEvent.click(buttonElm);

    const textAfterChangeElement = screen.getByText("Changed!");
    expect(textAfterChangeElement).toBeInTheDocument();
  });

  test("Text 'good to see you' hiden when button was clicked!", () => {
    render(<Greeting />);

    const buttonElm = screen.getByRole("button");
    userEvent.click(buttonElm);

    const textAfterChangeElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(textAfterChangeElement).toBeNull();
  });
});
