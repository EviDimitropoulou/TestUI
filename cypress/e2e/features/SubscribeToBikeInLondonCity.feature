Feature: Login to Swapfiets


        Scenario Outline: User Search for bikes in London
            Given user enters at Swapfiets page
             When user search for city "London"
             Then user is redirected to the page with the available bikes
              And the button All, E-bikes, city bikes exist
              And the more details link exists
              And there are four products
              And the names of the bikes "<bikes>" are displayed
              And the side menu is functional

        Examples:
                  | bikes    |
                  | Original |
                  | Deluxe 7 |
                  | Power 1  |
                  | Power 7  |

        Scenario: User subscibes to Power1 without select bike usage
            Given user selects Power1 bike
          #When user selects to subscribe to Power1 bike
             Then the url is "/london/power-1/configure"
              And the loyal membership is preselected
              And the flexible membership is not selected
             When user click on Order button
             Then the Required message is displayed

        Scenario: User subscibes to Power1
            Given user is at the subscription page
             When user selectes "yes" button
             Then the montly costs are "£109.90"
             When user selects flex membership
             Then the On off costs are "£39.90"

        Scenario Outline: User proceeds to the order
            Given user is at registration page
             When user click on Order button
             Then the form is displayed
              And the Country field is not editable
              And user fill in "<firstName>","<prefix>","<lastName>","<year>","<height>","<Street>","<HouseNumber>","<Addition>","<postalCode>","<city>","<email>",,"<phone>","<comments>"
        Examples:
                  | firstName | prefix | lastName      | year | height | Street    | HouseNumber | Addition | postalCode | city   | email             | phone      | comments |
                  | Evi       | asd    | dimitropoulou | 1993 | 160    | Filaretou | 12          | 1asd     | BD1 2RD    | London | evi.dim@gmail.com | 6984278733 | asdadas  |


        Scenario Outline: User is under 18 years old
            Given user is at registration page
             When user selects year "<year>"
             Then an information message is displayed
              And user cannot proceed to the next step
        Examples:
                  | year |
                  | 2012 |

        Scenario Outline: User leave empty values
            Given user is at registration page
             When user leave empty the fields "<field>"
             Then the corresponding "<message>" is displayed
        Examples:
                  | field      | message                |
                  | first name | This field is required |
                  | last name  | This field is required |

        Scenario Outline: User enters invalid data
            Given user is at registration page
             When user enters invalid values to the fields "<field>"
             Then the corresponding "<message>" is displayed

        Examples:
                  | field      | message                 |
                  | first name | This field is incorrect |
               #     | last name   | This field is incorrect |
                  | email       | This field is incorrect |
                  | postal code | This field is incorrect |

        Scenario Outline: User click on Back button
            Given user is at registration page
             When user click on button
             Then the United Kingdom remains as selected country
              And the language button displays "<language>"
        Examples:

                  | language |
                  | English  |

