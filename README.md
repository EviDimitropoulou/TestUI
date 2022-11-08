# Setup

## Getting Started

### Clone the repository:

```sh
git clone https://Eirini_mos@bitbucket.org/Eirini_mos/ppm_tool.git
```


- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter

## 🚀 Install the project

1. Make sure you already have npm installed. If not, use this command to install npm:

```sh
npm install
```

2. Make sure you already have cypress installed. If not, use this command to install cypress:

```sh
npm install cypress --save-dev
```

3. Make sure you have _cypress-cucumber-preprocessor_ plugin. If not, use this command to install it:

```sh
npm install  @badeball/cypress-cucumber-preprocessor
```

4. Make sure you have es build plugin. If not, use this command to install it:

 ```sh
npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
```

5. For fetting the reports make sure you have allure plugin. If not, use this command to install it:

 ```sh
npm i -D @shelex/cypress-allure-plugin
```
6. Also highly recommended to use these plugins in your IDE:

- Cucumber (Gherkin) Full Support
- Gherkin Beautifier
- Snippets and Syntax Highlight for Gherkin (Cucumber)
- Prettier - Code formatter

## How to run the tests

1. Execute at the command line npm run cypress:runner in order to open the IDE of Cypress OR execute
npm run  cypress:execution in order to run headless
2. As an alternative go to package.json and run the script "cypress:open" or "cypress:run"

## How to run and get the test reports 
1. Run the npm run cypress:execution-allure
2. Execute npm run allure:report from the command line or directly for package.json the   "allure:report"

##  Sample repo to generate an allure report as an artifact using GH Actions

* https://github.com/SeyiOG/newCyLearn2/blob/main/.github/workflows/cypress-allure-report.yml
