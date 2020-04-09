// / <reference types="cypress" />

describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit("/").end(); // change URL to match your dev URL
    });
});

