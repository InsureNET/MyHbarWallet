/// <reference types="cypress" />

describe("Access my Account", () => {
    it("It can Access Account With Keystore", () => {
        cy.visit("/")
        .wait(1000)
        .get(".home-tile-button[href='/access-my-account']")
        .click().wait(1000)
        .get(require("../fixtures/selectors.json").softwareAccessSelector)
        .click().wait(1000)
        .get("label[for=key]").click()
        .get("form.modal-access-by-software > button[type=submit]")
        .click().wait(1000)
        .get("input[placeholder='Enter Private Key']")
        .type(require("../fixtures/constants.json").keyPrivateKey)
        .get("button[type=submit].button-access-wallet").wait(100)
        .click().wait(1000)
        .get("input[placeholder='shard.realm.account or account']")
        .type(require("../fixtures/constants.json").keyAccountId)
        .wait(100).get("div.buttons > button[type=submit]")
        .click()
    });
});

