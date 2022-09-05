describe("empty spec", () => {
  before(() => {
    cy.request("DELETE", "http://localhost:8080/books?_cleanup=true");
  });
  beforeEach(() => {
    const books = [
      { name: "Refactoring", id: 1 },
      { name: "Domain-driven design", id: 2 },
      { name: "Building Microservices", id: 3 },
    ];

    books.map((book) =>
      cy.request("POST", "http://localhost:8080/books", book)
    );
  });
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);

      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
      ]);
    });
  });
});
