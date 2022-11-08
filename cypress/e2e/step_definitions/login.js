import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const search = require("../../pages/SearchLocator");
const Subscription = require("../../pages/SubscriptionLocators");
const PersonalDetails = require("../../pages/PersonalDetailsLocators");

import SearchLocator from "../../pages/SearchLocator";
import SubscriptionLocators from "../../pages/SubscriptionLocators";
import PersonalDetailsLocators from "../../pages/PersonalDetailsLocators";

const search2 = new SearchLocator();
const subscription2 = new SubscriptionLocators();
const details2 = new PersonalDetailsLocators();

Given("A web browser is at the Swapfiets login page", () => {
  cy.visit("/");
});

When("user search for city {string}", (city) => {
  search2.checkChooseCitytxtBox();
  search2.typeChooseCitytxtBox(city);
  search2.clickSeeBikesBtn();
});

Then("user is redirected to the page with the available bikes", () => {
  cy.url().should("eq", "https://swapfiets.co.uk/");
});

Then("the button All, E-bikes, city bikes exist", () => {
  search2.checkAllRadioBtn();
  search2.checkEbikeRadioBtn();
  search2.checkCitybikeRadioBtn();
});

Then("the more details link exists and is clickable", () => {
  search2.checkMoreDetailsLink("More details");
  cy.wait(500);
});

Then("the four products are displayed", () => {
  cy.get("[data-test-id=city-product-list-item]").should("have.length", 4);

  cy.contains("[data-test-id=city-product-list-item]", "Original");
  cy.contains("[data-test-id=city-product-list-item]", "Deluxe 7");
  cy.contains("[data-test-id=city-product-list-item]", "Power 1");
  cy.contains("[data-test-id=city-product-list-item]", "Power 7");

  cy.wait(200);
});

Then("the side menu is functional", () => {
  //assert that Sidemenu is functional
  search2.checkSideMenuBtn();
  //close side menu
  search2.checkSideMenuCloses();

  cy.wait(200);
});

When("user selects to subscribe to Power1 bike", () => {
  subscription2.clickOnSubscriptionBtn();
});
Then("the loyal membership is preselected", () => {
  //assert that Loyal membership is preselected
  subscription2.checkLoyalMembershipBtn();
});
Then("the flexible membership is not selected", () => {
  //assert that Loyal membership is preselected
  subscription2.checkFlexMembershipBtn();
});

When("user selectes {string} button", (button) => {
  subscription2.clickOnYesButton(button);
});

Then("the montly costs are {string}", (cost) => {
  //assert that Loyal membership is preselected
  subscription2.checkMontlyFieldHasValue(cost);
});

When("user selects flex membership", () => {
  subscription2.clickOnflex();
});

Then("the On off costs are {string}", (cost) => {
  //assert that Loyal membership is preselected
  subscription2.checkOnOffHasValue(cost);
});

When("user click on the Order button", () => {
  subscription2.clickOnOrderBikeBtn();;
});

Then("the form is displayed to fill in his personal data", () => {
 // subscription2.clickOnOrderBikeBtn();;
});
Then("the Country field is not editable", () => {
  //assert that Country fiels is not editable
  details2.checkCountryBtn();
 });




/*When(
 // "A user enters the username {string}, the password {string}, and clicks on the login button",
  (username, password) => {
    loginPage.submitLogin(username, password);
  }
);

When(
  "A user provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password);
    });
  }
);
Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});
Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});*/
