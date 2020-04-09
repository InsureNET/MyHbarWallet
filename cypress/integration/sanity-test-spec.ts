/// <reference types="cypress" />

describe("The Home Page", (): void => {
    it("successfully loads", (): void  => {
        cy.visit("/"); // change URL to match your dev URL
    });
});

