# bamazon_heroku



you may want to run following command *_ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';_* as is to ensure proper connectivity etc.

## latest changes include additional testing *_mocha_* and *_nyc-test_* 

### Testing rig setup is as displayed below, chnages are done to the *_package.json_* .

### ![Alt text](/screenshots/testing_rig_setup.png?raw=true "testing rig setup")

### Testing is performed using comamnd line ( after running *_npm install_* ).

#### *_npm run windowstest_*

#### The output indicates tests run and sucessful tests and failed tests.
        
#### ![Alt text](/screenshots/testing_nocodecoverage.png?raw=true "testing results")

#### *_npm run nyc-test_*
        
#### The output indicates tests run and sucessful tests and failed tests along with the *_code coverage_* , 
#### the test provides sufficient information for *_code coverage_* etc.

![Alt text](/screenshots/testing.png?raw=true "testing results with code coverage")



## order placement is working as expected 

![Alt text](/screenshots/inventory.png?raw=true "list inventory")

![Alt text](/screenshots/order_placed.png?raw=true "order placed")

![Alt text](/screenshots/stock_updated_after_order.png?raw=true "stock updated after valid order")

![Alt text](/screenshots/cant_process_order.png?raw=true "cant process due to lack of sufficient stock")
