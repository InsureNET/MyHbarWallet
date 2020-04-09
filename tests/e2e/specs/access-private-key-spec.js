// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
import { softwareAccessSelector } from "../fixtures/selectors";
import {
    keyPrivateKey,
    keyAccountId
} from "../fixtures/constants";

describe("Access my Account With Private Key", () => {
    it("It can Access Account With Private Key", () => {
        cy.visit("/")
            .wait(1000)
            .get(".home-tile-button[href='/access-my-account']")
            .click()
            .wait(1000)
            .get(softwareAccessSelector)
            .click()
            .wait(1000)
            .get("label[for=key]")
            .click()
            .get("form.modal-access-by-software > button[type=submit]")
            .click()
            .wait(1000)
            .get("input[placeholder='Enter Private Key']")
            .type(keyPrivateKey)
            .get("button[type=submit].button-access-wallet")
            .wait(100)
            .click()
            .wait(1000)
            .get("div.select-value-container")
            .click()
            .get(".select > .select-menu:nth-child(2)")
            .click()
            .get("input[placeholder='shard.realm.account or account']")
            .type(keyAccountId)
            .wait(100)
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

