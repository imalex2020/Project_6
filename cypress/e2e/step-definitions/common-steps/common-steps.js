const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const TGPagination = require('../../../pages/TGPagination')

const tgPagination = new TGPagination()


Given(/^the user is on "([^"]*)"$/, (url) => {
	cy.visit(url)
})
