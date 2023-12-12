
class TGPagination {

getHeading(){
    return cy.get('.is-size-3')
}

getSubHeading(){
    return cy.get('#sub_heading')
}

getParagraph(){
    return cy.get('#content')
}

getPrevious(){
    return cy.get('#previous')
}

getNext(){
    return cy.get('#next')
}

getCityInfo(){
    return cy.get('.Pagination_pagBodyData__vG6oj > p')
}

getCityImage(){
    return cy.get('.city_image')
}

clickNextUntilDisabled() {
    cy.waitUntil(() => {
      return this.getNext().then($btn => {
        if ($btn.is(':disabled')) {
          return true
        } else {
          cy.wrap($btn).click()
          return false
        }
      })
    })
  }

}

module.exports = TGPagination