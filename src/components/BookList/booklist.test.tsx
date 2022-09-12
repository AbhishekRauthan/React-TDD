import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import BookList from "./index";
import { MemoryRouter as Router } from "react-router-dom";

describe("Testing BookList", () => {
  it("Renders Loading", () => {
    const props = {
      loading: true,
      error: false,
      books: [],
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");

    expect(content?.innerHTML).toContain("Loading");
  });
  it("Renders Error", () => {
    const props = {
      loading: false,
      error: true,
      books: [],
    };
    const { container } = render(<BookList {...props} />);
    const content = container.querySelector("p");

    expect(content?.innerHTML).toContain("Error");
  });
  it("Renders Data", () => {
    const props = {
      loading: false,
      error: false,
      books: [
        { name: "Refactoring", id: 1 },
        { name: "Domain-driven design", id: 2 },
        { name: "Building Microservices", id: 3 },
      ],
    };
    const { container } = render(
      <Router>
        <BookList {...props} />
      </Router>
    );
    const titles = [...container.querySelectorAll("h2")].map(
      (x) => x.innerHTML
    );
    expect(titles).toEqual([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
    ]);
  });
});
