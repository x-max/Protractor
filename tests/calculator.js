
let homepage = require('../pages/homepage')

//describe is like a scenario
describe('Demo calculator tests', function(){

    //it blocks are like test cases
    it('addition test', function(){
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');
        
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding', '5'))

        //something like assertions - verification statement
        //expect(result.getText()).toEqual('5');
        homepage.verifyresult('7');
        
        
        browser.sleep(2000);
        
    });

    //it blocks are like test cases
    it('substraction test', function(){
        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');
        
        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();

        //let result = element(by.cssContainingText('.ng-binding', '5'))

        //something like assertions - verification statement
        //expect(result.getText()).toEqual('5');
        homepage.verifyresult('7');
        
        
        browser.sleep(2000);
        
    });


});