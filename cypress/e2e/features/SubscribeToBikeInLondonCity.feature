Feature: Login to Swapfiets


        Scenario Outline: User Search for bikes in London
            Given A web browser is at the Swapfiets page
             When user search for city "London"
             Then user is redirected to the page with the available bikes
              And the button All, E-bikes, city bikes exist
              And the more details link exists
              And the four products are displayed with product names "<bikes>"
              And the side menu is functional
              
        Examples:
                  | bikes    |
                  | Original |
                  | Deluxe 7 |
                  | Power 1  |
                  | Power 7  |

        Scenario: User subscibes to Power1 without select bike usage
             When user selects to subscribe to Power1 bike
             Then the loyal membership is preselected
              And the flexible membership is not selected
             When user click on Order button
             Then the Required message is displayed

        Scenario: User subscibes to Power1
             When user selectes "yes" button
             Then the montly costs are "£109.90"
             When user selects flex membership
             Then the On off costs are "£39.90"

        Scenario: User proceeds to the order
             When user click on Order button
             Then the form is displayed
              And the Country field is not editable
              And user fill in the data

        Scenario Outline: User is under 18 years old
             When user selects year "<year>"
             Then an information message is displayed
              And user cannot proceed to the next step
        Examples:
                  | year |
                  | 2012 |
           
        Scenario Outline: User leave empty values
             When user leave empty the fields "<field>"
             Then the corresponding "<message>" is displayed
        Examples:
                  | field      | message                |
                  | first name | This field is required |
                  | last name  | This field is required |

        Scenario Outline: User enters invalid data
             When user enters invalid values to the fields "<field>"
              And click on Next button
             Then the corresponding "<message>" is displayed
             
        Examples:
                  | field      | message                 |
                  | first name | This field is incorrect |
            #     | last name   | This field is incorrect |
                  | email       | This field is incorrect |
                  | postal code | This field is incorrect |

        Scenario: User click on Bavk button
             When user click on button
             #   Then he he redicted to previous page
           

    
        