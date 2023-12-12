const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const TGPagination = require('../../../pages/TGPagination')

const tgPagination = new TGPagination()


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    switch (heading) {
        case 'Pagination':
            tgPagination.getHeading().should('have.text', heading)
            break
        case 'World City Populations 2022':
            tgPagination.getSubHeading().should('have.text', heading)
            break



    }

})


Then(/^the user should see the "([^"]*)" paragraph$/, (text) => {
    tgPagination.getParagraph().should('have.text', text)
})

Then(/^the user should see the "([^"]*)" button is disabled$/, (button) => {
    switch (button) {
        case 'Next':
            tgPagination.getNext().should('not.be.enabled')
            break
            case 'Previous':
            tgPagination.getPrevious().should('not.be.enabled')
            break

       
    }

})


Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
    switch (button) {
        case 'Next':
            tgPagination.getNext().should('be.enabled')
            break
            case 'Previous':
            tgPagination.getPrevious().should('be.enabled')
            break

       
    }

})


When(/^the user clicks on the "([^"]*)" button$/, () => {
    tgPagination.getNext().click()
})


When(/^the user clicks on the "Next" button till it becomes disabled$/, () => {
    tgPagination.clickNextUntilDisabled()
})


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city, dataTable) => {
tgPagination.getCityImage().should('have.attr', 'alt', city)

	const row = dataTable.rawTable.flat()
    tgPagination.getCityInfo().each(($el, index) => {
        cy.wrap($el).should('have.text', row[index])
})
})
