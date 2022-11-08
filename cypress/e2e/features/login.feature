Feature: Login to Swapfiets

       
            
        Scenario: User goes to page with all the bikes
            Given A web browser is at the Swapfiets login page
             When user search for city "London"
             Then user is redirected to the page with the available bikes
              And the button All, E-bikes, city bikes exist
              And the more details link exists and is clickable
              And the four products are displayed
              And the side menu is functional

        Scenario: User subscibes to Power1
             When user selects to subscribe to Power1 bike
             Then the loyal membership is preselected
              And the flexible membership is not selected
             When user selectes "yes" button
             Then the montly costs are "£109.90"
             When user selects flex membership
             Then the On off costs are "£39.90"

        Scenario: User proceeds to the order
             When user click on the Order button
             Then the form is displayed to fill in his personal data
              And the Country field is not editable

        #       When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
        #       Then the url will contains the inventory subdirectory
    #      Scenario: Blocked Login
    #           When A user enters the username "locked_out_user", the password "secret_sauce", and clicks on the login button
     #          Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed
     #     Scenario: Incorrect Username Login
      #         When A user provides incorrect credentials, and clicks on the login button
     #               | username | password |
      #            | testName | secret_sauce |
    #         Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
    #    Scenario: Incorrect Password Login
      #       When A user provides incorrect credentials, and clicks on the login button
        #          | username      | password     |
        #          | standard_user | testPassword |
         #    Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed