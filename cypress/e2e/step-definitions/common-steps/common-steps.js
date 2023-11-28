const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const TGTables = require('../../../pages/TGTables')

const tgTables = new TGTables()


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})
