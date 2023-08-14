import userLoginData from "../fixtures/userLoginData.json";

describe("User Details Page - Displayed Correctly", () => {
  before(() => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type(userLoginData.userName);
    cy.get('input[placeholder="password"]').type(userLoginData.password);
    cy.get("button").click();

    // "Hello usersName" is the greeting message that appears after successful login
    cy.contains("div", "Hello").should("contain.text", "Hello ");
  });

  it("should display user details correctly", () => {
    // "Hello usersName" should show the user's name after successful login
    cy.get('[data-layer="Content"]').should(
      "have",
      ` Hell0 {userLoginData.userName}`
    );

    // These elements exist on the page and should be visible after login
    cy.contains("Name").should("be.visible");
    cy.contains("Favourite Fruit").should("be.visible");
    cy.contains("Favourite Movie").should("be.visible");
    cy.contains("Favourite Number").should("be.visible");
    
  });
});
