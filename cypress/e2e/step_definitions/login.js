import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const search = require("../../pages/SearchLocator");
const Subscription = require("../../pages/SubscriptionLocators");
const PersonalDetails = require("../../pages/PersonalDetailsLocators");



import SearchLocator from '../../pages/SearchLocator';
import SubscriptionLocators  from '../../pages/SubscriptionLocators'; 
import PersonalDetailsLocators  from '../../pages/PersonalDetailsLocators'; 

const search2 = new SearchLocator();
const subscription2= new SubscriptionLocators();
const details2= new PersonalDetailsLocators();
  
  Given("A web browser is at the UK page", () => {
    cy.visit("/");
  });
  
  When("user search for city {string}", (city) => {
    search.checkChooseCitytxtBox();
    search.typeChooseCitytxtBox(city);
  });


  // When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  //   loginPage.submitLogin(username,password)
  // });
  
  // When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  //   table.hashes().forEach((row) => {
  //     cy.log(row.username);
  //     cy.log(row.password);
  //     loginPage.submitLogin(row.username, row.password)
  
  //   });
  // });
  // Then("the url will contains the inventory subdirectory", () => {
  //   cy.url().should("contains", "/inventory.html");
  // });
  // Then("The error message {string} is displayed", (errorMessage) => {
  //   loginPage.elements.errorMessage().should("have.text", errorMessage);
  // });
  