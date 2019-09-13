describe('Demo calculator tests', function(){

    it('addition test', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.cssContainingText('.ng-binding', '5'))

        expect(result.getText()).toEqual('5');
        browser.sleep(8000);
        
    });


});