const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

const TGTables = require('../../../pages/TGTables')

const tgTables = new TGTables()


Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
    tgTables.getHeading().should('have.text', heading)
})


Then(/^the user should see the table with the headers below$/, (dataTable) => {
    const headText = dataTable.rawTable.flat()
    tgTables.getTableHeaders().each(($el, index) => {
        cy.wrap($el).should('have.text', headText[index])
    })

})


Then(/^the user should see the table with the rows below$/, (dataTable) => {
    const headText = dataTable.rawTable.flat()
    tgTables.getallRows().each(($el, index) => {
        cy.wrap($el).should('have.text', headText[index])
    })
})


Then(/^the user should see the "([^"]*)" button is enabled$/, (button) => {
    switch (button) {
        case 'ADD PRODUCT':
            tgTables.getProductButton().should('have.text', button).and('be.enabled')
            break
        case 'X':
            tgTables.getCloseButton().should('be.enabled')
            break
        case 'SUBMIT':
            tgTables.getSubmitButton().should('have.text', button).and('be.enabled')
            break
        default:
            break
    }
})


Then(/^the user should see the "([^"]*)" text displayed$/, (text) => {

    tgTables.getTottal().should('have.text', text)

    /*tgTables.getLastColonum().invoke('text').then((priceText) =>{
      const prices = priceText.split(' ').map(x => Number(x.replace(/\D/g, '')))
      const totalPrice = prices.reduce((acc, curr) => acc + curr, 0)
      cy.wrap(totalPrice.toString()).should('have.text', text)
    })*/

})







When(/^the user clicks on the "([^"]*)" button$/, (button) => {
    switch (button) {
        case 'ADD PRODUCT':
            tgTables.getProductButton().click()
            break
        case 'X':
            tgTables.getCloseButton().click()
            break
        case 'SUBMIT':
            tgTables.getSubmitButton().click()
            break
        default:
            break
    }
})


Then(/^the user should see the "([^"]*)" modal with its heading$/, (heading) => {

    tgTables.getAddNewProductHeading().should('have.text', heading)


})


Then(/^the user should see the "([^"]*)" input box is enabled$/, (input) => {
    switch (input) {
        case 'Quantity':
            tgTables.getQuantityInput().should('be.enabled')
            break
        case 'Product':
            tgTables.getProductInput().should('be.enabled')
            break
        case 'Price':
            tgTables.getPriceInput().should('be.enabled')
            break
        default:
            break


    }
})

Then(/^the user should see the "([^"]*)" label$/, (label) => {
    switch (label) {
        case 'Please select the quantity':
            tgTables.getQuantityLabel().should('have.text', label)
            break
        case 'Please enter the name of the product':
            tgTables.getProductLabel().should('have.text', label)
            break
        case 'Please enter the price of the product':
            tgTables.getPriceLabel().should('have.text', label)
            break
        default:
            break
    }
})


Then(/^the user should not see the "([^"]*)" modal$/, (args1) => {
    tgTables.getModalCard().should('not.exist')
})


Then(/^the user enters the quantity as "([^"]*)"$/, (number) => {
    tgTables.getQuantityInput().type(number)
})

Then(/^the user enters the product as "([^"]*)"$/, (name) => {
    tgTables.getProductInput().type(name)
})

Then(/^the user enters the price as "([^"]*)"$/, (price) => {
    tgTables.getPriceInput().type(price)
})


Then(/^the user should see the table with the new row below$/, (dataTable) => {
    lastRaw = dataTable.rawTable.flat()
    tgTables.getLastRow().each(($el, index) => {
        cy.wrap($el).should('have.text', lastRaw[index])
    })
})





