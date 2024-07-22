const page = require('../../page.js');
const helper = require('../../helper.js')

describe('Make an appointment', () => {
    it('should make a quick appointment', async () => {
        await browser.url(`/`)
        const phoneNumber = helper.getPhoneNumber("+7");
        await page.fillNameAndPhone('Тест', phoneNumber);
        await browser.pause (2000);
        const agreementCheckBox = await $(page.agreementCheckBox);
        await agreementCheckBox.click();
        await browser.pause (2000);
        const quickAppointButton = await $(page.quickAppointButton);
        await browser.pause(2000);
        await quickAppointButton.click({x:0,y:0});
        await browser.pause (10000);
        const quickFormSent = await $(page.quickFormSent);
        await expect(quickFormSent).toBeExisting();

    })   

 /*   it('should choose supportive plan', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.chooseSupportivePlan();
        })

    it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCardNumber(cardNumber, cardCode);
    })

   it('should write a message to the driver', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.writeMessage('Bring me a pint of beer!');
    })

    it('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.chooseSupportivePlan();
        await page.orderBlanketAndHandkerchiefs();
    })

    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.chooseSupportivePlan();
        await page.orderTwoIceCreams();
    })

    it('should check that the car search modal appears', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.chooseSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCardNumber(cardNumber, cardCode);
        await page.writeMessage('Bring me a pint of beer!');
        await page.orderBlanketAndHandkerchiefs();
        await page.orderTwoIceCreams();
        await page.orderTaxi();
    })    

    it('should check for the driver info to appear', async () => {
        await browser.url(`/`)
        await browser.deleteCookies();
        await browser.execute('localStorage.clear()');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.chooseSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.fillCardNumber(cardNumber, cardCode);
        await page.writeMessage('Bring me a pint of beer!');
        await page.orderBlanketAndHandkerchiefs();
        await page.orderTwoIceCreams();
        await page.orderTaxi();
        await browser.pause (35000);
        const driverArriving = await $(page.driverArriving).getText();
        const appear = await expect(driverArriving).toContain('The driver will arrive');
    })  
*/
})

