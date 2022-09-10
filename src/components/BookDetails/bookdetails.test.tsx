import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BookDetails from ".";

describe("Testing BookDetails Component", () => {
  it("renders title", () => {
    const props = {
      book: {
        name: "Refactoring",
        id: 1,
      },
    };
    const { container } = render(<BookDetails {...props} />);
    const title = container.querySelector(".book-title");
    expect(title?.innerHTML).toEqual(props.book.name);
  });

  it("renders description", () => {
    const props = {
      book: {
        name: "Refactoring",
        id: 1,
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    };
    const { container } = render(<BookDetails {...props} />);
    const description = container.querySelector("p.book-description");
    expect(description?.innerHTML).toEqual(props.book.description);
  });
});
