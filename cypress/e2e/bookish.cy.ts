describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design"]);
    });
  });
});
