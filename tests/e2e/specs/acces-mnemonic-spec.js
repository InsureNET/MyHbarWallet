// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
import { softwareAccessSelector, accountInputSelector } from "../fixtures/selectors";
import { mnemonicPhrase, mnemonicPhraseAccountId } from "../fixtures/constants";

describe("Access my Account", () => {
    it("It can Access Account With Mnemonic", () => {
        cy.visit("/")
            .wait(1000)
            .get(".home-tile-button[href='/access-my-account']")
            .click()
            .wait(1000)
            .get(softwareAccessSelector)
            .click()
            .wait(1000)
            .get("label[for=phrase]")
            .click()
            .get("form.modal-access-by-software > button[type=submit]")
            .click()
            .wait(1000);
        mnemonicPhrase.forEach((phrase, idx) => {
            cy.get(`input[data-index=${idx + 1}]`)
                .type(phrase);
        });
        cy.get("button.continue-btn")
            .click()
            .wait(1000)
            .get(accountInputSelector)
            .type(mnemonicPhraseAccountId)
            .wait(1000)
            .get("div.select-value-container")
            .click()
            .get(".select > .select-menu:nth-child(2)")
            .click()
            .get("div.buttons > button[type=submit]")
            .click()
            .wait(2000)
            .location()
            .should((loc) => {
                expect(loc.pathname).to.eq("/interface/send-transfer");
            })
            .end();
    });
});

