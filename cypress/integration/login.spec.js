import userLoginData from "../fixtures/userLoginData.json";

//UserName: SomeName
//Password: TopSecret1234!

describe("Login Page", () => {
  it("Visit Website", () => {
    cy.visit("http://localhost:8080");
  });

  //Test_Case_1
  it("User Shoild able to login with valid data", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type(userLoginData.userName);
    cy.get('input[placeholder="password"]').type(userLoginData.password);
    cy.get("button").click();
    cy.contains("div", "Hello").should("contain.text", "Hello");
  });

  //Test_Case_2
  it("Should show sign up instruction for no account", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("Tanvir07");
    cy.get('input[placeholder="password"]').type("8734@07");
    cy.get("button").click();
    cy.get(".sc-ifAKCX > div").should(
      "have.text",
      "If you do not have an account, contact an admin"
    );
  });

  //Test_Case_3
  it("Should show error message for empty fields", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("");
    cy.get('input[placeholder="password"]').type("");
    cy.get("button").click();
    cy.contains("div", "message").should(
      "contain.text",
      "cannot accept an empty String"
    );
  });

  //Test_Case_4
  it("Should show error message for empty password", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type(userLoginData.userName);
    cy.get('input[placeholder="password"]').type("");
    cy.get("button").click();
    cy.contains("div", "Empty Password").should("contain.text", "Empty");
  });

  //Test_Case_5
  it("Should show error message for empty username", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("");
    cy.get('input[placeholder="password"]').type(userLoginData.password);
    cy.get("button").click();
    cy.contains("div", "Empty Username").should("contain.text", "Empty");
  });

  //Test_Case_6
  it("Should show error message for invalid username characters", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("&%$//");
    cy.get('input[placeholder="password"]').type(userLoginData.password);
    cy.get("button").click();
    cy.contains("div", "Invalid Username").should("contain.text", "Invalid");
  });

  //Test_Case_7
  it("Should show error message for invalid password", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("&%$//");
    cy.get('input[placeholder="password"]').type("TopSecret123445!");
    cy.get("button").click();
    cy.contains("div", "Invalid Password").should("contain.text", "Invalid");
  });

  //Test_Case_8
  it("Should show error message for invalid credentials", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("Tanvir07");
    cy.get('input[placeholder="password"]').type("8734@07");
    cy.get("button").click();
    cy.contains("div", "message").should(
      "contain.text",
      "Invalid username or password"
    );
  });

  //Test_Case_9
  it("Should show error message for space on password and username", () => {
    cy.visit("http://localhost:8080");
    cy.get('input[placeholder="Enter Username"]').type("SomeName");
    cy.get('input[placeholder="password"]').type("TopSecret1234!");
    cy.get("button").click();
    cy.contains("div", "message").should(
      "contain.text",
      "Invalid username or password"
    );
  });
});
