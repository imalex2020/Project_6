
class TGTables {

getHeading(){
    return cy.get('.is-size-3')
}

getTableHeaders(){
    return cy.get('.header')
}

getallRows(){
    return cy.get('tr > td')
}

getProductButton(){
    return cy.get('#add_product_btn').should('be.enabled')
}

getTottal(){
    return cy.get('#total_amount')
}

getCloseButton(){
    return cy.get('.delete')
}

getSubmitButton(){
    return cy.get('#submit')
}

getAddNewProductHeading(){
    return cy.get('#modal_title')
}

getQuantityInput(){
    return cy.get('#quantity')
}
getPriceInput(){
    return cy.get('#price')
}

getProductInput(){
    return cy.get('#product')
}

getQuantityLabel(){
    return cy.get('label[for="product_quantity"]')
}

getProductLabel(){
    return cy.get('label[for="product_name"]')
}

getPriceLabel(){
    return cy.get('label[for="product_price"]')
}

getModalCard(){
    return cy.get('.modal-card-body')
}

getLastRow(){
    return cy.get('#product_table > tbody > tr:last-child > td')
}

getTotalAnount(){
    return cy.get('#total_amount')
}
getLastColonum(){
    return cy.get('#product_table > tbody > tr >  td:last-child')
}

}

module.exports = TGTables