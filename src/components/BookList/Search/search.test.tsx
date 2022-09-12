import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Search from "./index";

describe("Testing Search Component", () => {
  it("Renders input", async () => {
    const props = {
      term: "",
      onSearch: vi.fn(),
    };
    const { container } = render(<Search {...props} />);
    const input = container.querySelector("input[type='text']");
    await userEvents.type(input!, "domain");
    expect(props.onSearch).toBeCalled();
  });
});
