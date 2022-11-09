class SubscriptionLocators {

  elements = {

    getSubscriptionBtn: () => cy.get('a[href*="power-1/configure"]'),
    getLoyalMembershipBtn: () => cy.get('span [value="loyal"]'),
    getFlexMembershipBtn: () => cy.get('span [value="flexible"]'),
    getYesBikeUsageBtn: () => cy.get('span [value="yes"]'),
    getNoBikeUsageBtn: () => cy.get('span [value="no"]'),
    getOnOffTxbBox: () => cy.get('[data-test-id="priceBlueBar.oneOff"]'),
    getMonthlyTxbBox: () => cy.get('[data-test-id="priceBlueBar.monthly"]'),
    getOrderBikeBtn: () => cy.get('[data-test-id="configure-submit-button"]'),
    getForm: () => cy.get('[class="main--registration ng-tns-c102-2"]'),
    getRequiredTxt: () => cy.get('[class="HeavyUser_error__pymIR"]'),

  }

  clickOnSubscriptionBtn() {
    this.elements.getSubscriptionBtn()
      .should('exist')
      .click({ force: true });
  }
  checkLoyalMembershipBtn() {
    this.elements.getLoyalMembershipBtn()
      .should('exist')
      .should('be.checked')
      .and('have.value', 'loyal');
  }
  checkFlexMembershipBtn() {
    this.elements.getFlexMembershipBtn()
      .should('exist')
      .should('be.not.checked')
      .and('have.value', 'flexible');
  }
  clickOnYesButton(button) {
    this.elements.getLoyalMembershipBtn()
      .should('be.checked');
    cy.wait(500);
    this.elements.getYesBikeUsageBtn()
      .check({ force: true });
  }
  checkMontlyFieldHasValue(cost) {
    this.elements.getMonthlyTxbBox()
      .should('contain', cost);
  }
  clickOnflex() {
    this.elements.getFlexMembershipBtn().check({ force: true });
    cy.wait(500);
    this.elements.getYesBikeUsageBtn().check({ force: true });
  }
  checkOnOffHasValue(cost) {
    this.elements.getOnOffTxbBox()
      .should('contain', cost);
  }
  clickOnOrderBikeBtn() {
    this.elements.getOrderBikeBtn().should('exist')
      .click({ force: true });
    // cy.request('https://account.swapfiets.com/registration/enroll')
  }
  formIsDisplayed() {
    this.elements.getForm().should('exist');
  }
  checkRequiredMessage() {
    this.elements.getRequiredTxt().should('exist')
  }

}

export default SubscriptionLocators
