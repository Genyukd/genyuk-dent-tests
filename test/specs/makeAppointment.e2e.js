const page = require('../../page.js');
const helper = require('../../helper.js')

describe('Make an appointment', () => {
    it('should make a quick appointment', async () => {
        await browser.url(`/`)
        const phoneNumber = helper.getPhoneNumber("+7");
        await page.fillNameAndPhone('Тест', phoneNumber);
        const agreementCheckBox = await $(page.agreementCheckBox);
        await agreementCheckBox.click();
        const quickAppointButton = await $(page.quickAppointButton);
        await quickAppointButton.scrollIntoView();
        await quickAppointButton.click({x:0, y:0});
        const quickFormSent = await $(page.quickFormSent);
        await expect(quickFormSent).toBeExisting();
        await browser.reloadSession();

    })  
}),

describe('Leave a feedback', () => {
    it('should write a feedback', async () => {
        await browser.url(`/`)
        await browser.newWindow('https://genyuk-dent.ru/opinion');
        await browser.url('https://genyuk-dent.ru/opinion');
        const leaveFeedback = await $(page.leaveFeedback);
        leaveFeedback.click();
        const sendFeedback = await $(page.sendFeedback);
        sendFeedback.scrollIntoView();
        await sendFeedback.click(); //actual feedback cannot be tested, as the input form is abscent
        const feedbackApproval = await $(page.feedbackApproval);
        await feedbackApproval.waitForDisplayed();
        expect(feedbackApproval).toBeExisting();

    })
}),

describe('Make an online appointment', () => {
    it('should make an online appointment', async () => {
        await browser.url(`/`)
        await browser.newWindow('https://genyuk-dent.ru/online');
        await browser.url('https://genyuk-dent.ru/online');
        const treatmentSelector = await $(page.treatmentSelector);
        treatmentSelector.click();
        const implantSelector = await $(page.implantSelector);
        await implantSelector.waitForDisplayed();
        implantSelector.click();
        await browser.keys('Tab');
        const phoneNumberField = await $(page.phoneNumberField);
        const phoneNumber = helper.getPhoneNumber("+7");
        phoneNumberField.setValue(phoneNumber);
        const nameUser = await $(page.nameUser);
        nameUser.setValue("Тест");
        const purposeSelector = await $(page.purposeSelector);
        purposeSelector.click();
        const advertWeb = await $(page.advertWeb);
        advertWeb.click();
        const commentsField = await $(page.commentsField);
        commentsField.setValue("Привет, это автотест на WebDriverIO!");
        const appointmentCheckBox = await $(page.appointmentCheckBox);
        appointmentCheckBox.scrollIntoView();
        appointmentCheckBox.click();
        await expect(implantSelector).toBeSelected();
        await expect(phoneNumberField).toHaveValue(phoneNumber);
        await expect(nameUser).toHaveValue("Тест");
        await expect(advertWeb).toBeSelected();
        await expect(commentsField).toHaveValue("Привет, это автотест на WebDriverIO!");
        await expect(appointmentCheckBox).toBeSelected();
        const submitButton = await $(page.submitButton);
        submitButton.click();
        const notARobotMessage = await $(page.notARobotMessage);
        notARobotMessage.waitForDisplayed();
        await expect(notARobotMessage).toBeExisting();
    })
})

   