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

beforeEach(function(){
cy.viewport(1600, 903)
});


Given("user enters at Swapfiets page", () => {
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

Then("there are four products", () => {
  searchPage.checkNumberOfBikes();
});
Then("the names of the bikes {string} are displayed", (name) => {
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

Given("user selects Power1 bike", () => {
  subscriptionPage.clickOnSubscriptionBtn();
});

Then("the url is {string}", (url) => {
 cy.location('pathname').should('eq',url)
});

Then("the loyal membership is preselected", () => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkLoyalMembershipBtn();
});
Then("the flexible membership is not selected", () => {
  //assert that Loyal membership is preselected
  subscriptionPage.checkFlexMembershipBtn();
});

Given("user is at the subscription page", () => {
  cy.location('pathname').should('eq','/london/power-1/configure')
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
 // cy.fixture("fixtures/subscriber.json").then(form=>{
   // this.forms=forms;
  //})
});

Then("the Required message is displayed", () => {
  subscriptionPage.checkRequiredMessage();
});

Given("user is at registration page", () => {
});

Then("the form is displayed", () => {
  subscriptionPage.formIsDisplayed();
});
Then("the Country field is not editable", () => {
  //assert that Country fiels is not editable
  detailsPage.checkCountryBtn();
});

Then("user fill in {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},,{string},{string}", (firstName,prefix,lastName,year,height,street,houseNum,addition,postal,city,email,phone,comments) => {
  //type the form
  detailsPage.TypeFirstName(firstName);
  detailsPage.TypePrefix(prefix);
  detailsPage.TypeLastName(lastName);
  detailsPage.selectDay();
  detailsPage.selectMonth();
  detailsPage.selectYear(year);
  detailsPage.CheckGender();
  detailsPage.enterHeight(height);
  // detailsPage.OnHoverMsg();
  detailsPage.enterStreet(street);
  detailsPage.enterHouseNumber(houseNum);
  detailsPage.enterAddition(addition);
  detailsPage.enterPostalCode(postal);
  detailsPage.enterCityField(city);

  //assert that Country fiels is not editable
  detailsPage.checkCountryBtn();

  detailsPage.enterEmailAddress(email);
  detailsPage.selectTelephoneCode();
  detailsPage.enterPhone(phone);
  detailsPage.enterComments(comments);
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

Then("the United Kingdom remains as selected country", () => {
  searchPage.checkCountryisUK();
});

Then("the language button displays {string}", (language) => {
  searchPage.checkCountryisUK(language);
});

