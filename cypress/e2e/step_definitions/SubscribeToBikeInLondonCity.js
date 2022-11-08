import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

const search = require("../../pages/SearchLocator");
const Subscription = require("../../pages/SubscriptionLocators");
const PersonalDetails = require("../../pages/PersonalDetailsLocators");

import SearchLocator from "../../pages/SearchLocator";
import SubscriptionLocators from "../../pages/SubscriptionLocators";
import PersonalDetailsLocators from "../../pages/PersonalDetailsLocators";

const searchPage = new SearchLocator();
const subscriptionPage = new SubscriptionLocators();
const detailsPage = new PersonalDetailsLocators();



Given("A web browser is at the Swapfiets page", () => {
  cy.visit("https://swapfiets.com/en-GB");
});

When("user search for city {string}", (city) => {
  searchPage.checkChooseCitytxtBox();
  searchPage.typeChooseCitytxtBox(city);
  searchPage.clickSeeBikesBtn();
});

Then("user is redirected to the page with the available bikes", () => {
  //assert that user is at the correct page 
  cy.url().should("eq", "https://swapfiets.co.uk/");
});

Then("the button All, E-bikes, city bikes exist", () => {
  searchPage.checkAllRadioBtn();
  searchPage.checkEbikeRadioBtn();
  searchPage.checkCitybikeRadioBtn();
});

Then("the more details link exists", () => {
  searchPage.checkMoreDetailsLink("More details");
  cy.wait(500);
});

Then("the four products are displayed with product names {string}", (name) => {
  cy.get("[data-test-id=city-product-list-item]").should("have.length", 4);
  searchPage.checkBikes(name);
  cy.wait(200);
});

Then("the side menu is functional", () => {
  //assert that Sidemenu is functional
  searchPage.checkSideMenuBtn();
  //close side menu
  searchPage.checkSideMenuCloses();

  cy.wait(200);
});

When("user selects to subscribe to Power1 bike", () => {
  subscriptionPage.clickOnSubscriptionBtn();
});
Then("the loyal membership is preselected", () => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkLoyalMembershipBtn();
});
Then("the flexible membership is not selected", () => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkFlexMembershipBtn();
});

When("user selectes {string} button", (button) => {
  subscriptionPage.clickOnYesButton(button);
});

Then("the montly costs are {string}", (cost) => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkMontlyFieldHasValue(cost);
});

When("user selects flex membership", () => {
  subscriptionPage.clickOnflex();
});

Then("the On off costs are {string}", (cost) => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkOnOffHasValue(cost);
});

When("user click on Order button", () => {
  subscriptionPage.clickOnOrderBikeBtn();;
  cy.wait(100);
});

Then("the Required message is displayed", () => {
  subscriptionPage.checkRequiredMessage();
});

Then("the form is displayed", () => {
  subscriptionPage.formIsDisplayed();
});
Then("the Country field is not editable", () => {
  //assert that Country fiels is not editable
  detailsPage.checkCountryBtn();
});

Then("user fill in the data", () => {
  //type firstName
  detailsPage.TypeFirstName("Evi");
  detailsPage.TypePrefix("fi");
  detailsPage.TypeLastName("Dom");
  detailsPage.selectDay();
  detailsPage.selectMonth();
  detailsPage.selectYear("1993");
  detailsPage.CheckGender();
  detailsPage.enterHeight("160");
  // detailsPage.OnHoverMsg();
  detailsPage.enterStreet("Filaretou");
  detailsPage.enterHouseNumber("17");
  detailsPage.enterAddition("addition");
  detailsPage.enterPostalCode("BD1 2RD");
  detailsPage.enterCityField("London");

  //assert that Country fiels is not editable
  detailsPage.checkCountryBtn();

  detailsPage.enterEmailAddress("evi.dimitropoulou@gmail.com");
  detailsPage.selectTelephoneCode();
  detailsPage.enterPhone("6984278733");
  detailsPage.enterComments("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
  detailsPage.clickOnTermsAndConditions();
  detailsPage.clickOnGDPR();
});


When("user selects year {string}", (year) => {
  detailsPage.selectYear(year)

});
Then("an information message is displayed", () => {
  detailsPage.checkUnder18Message();
});

Then("user cannot proceed to the next step", () => {
  detailsPage.NextBtnIsDisabled();
});

When("user leave empty the fields {string}", (field) => {
  if (field === 'first name') {
    detailsPage.clearNameField();
    detailsPage.clickOnNextButton();
  }
  else if (field === 'last name') {
    detailsPage.clearLastNameField();
    detailsPage.clickOnNextButton();
  }

});


When("click on Next button", () => { });

When("user enters invalid values to the fields {string}", (field) => {
  if (field === 'first name') {
    detailsPage.clearNameField();
    detailsPage.enterInvalidFirstName()
    detailsPage.clickOnNextButton();
  }
  else if (field === 'last name') {
    detailsPage.clearLastNameField();
    detailsPage.enterInvalidLastName();
    detailsPage.clickOnNextButton();
  } else if (field === 'postal code') {
    detailsPage.cleaPostalCode();
    detailsPage.enterInvalidPostalCode();
    detailsPage.clickOnNextButton();
  }
  else if (field === 'email') {
    detailsPage.clearEmailField();
    detailsPage.enterInvalidEmail();
    detailsPage.clickOnNextButton();
  }


});

Then("the corresponding {string} is displayed", (message) => {

  if (message === 'This field is required')
    detailsPage.checkRequiredErrorMessage(message);
  else if (message === 'This field is incorrect')
    detailsPage.checkInvalidErrorMessage(message)

});

When("user click on button", () => {
  detailsPage.clickOnBackButton();


});
