import userLoginData from "../fixtures/userLoginData.json";

describe("LOGOUT -Logout Functionality", () => {
  before("Login before logout", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type(userLoginData.userName);
    cy.get('input[placeholder="password"]').type(userLoginData.password);
    cy.get("button").click();

    // "Hello usersName" is the greeting message that appears after successful login
    cy.contains("div", "Hello").should("contain.text", "Hello ");
  });

  it("should able to logout Successfully", () => {
    //Logout Should Be visible
    cy.contains("LOGOUT").should("be.visible");

    //Clicking On logout button
    cy.get(".sc-bxivhb").click();

    //Checking For Home page title to confirm logout happens
    cy.get(".sc-bZQynM").should("contain.text", "LOGIN");
  });
});
