module.exports = {
    // Inputs
    nameField: '//*[@id="ihkpbf1df_0"]',
    phoneField: '//*[@id="i3x2o6ob0_0"]',
    phoneNumberField: '//*[@id="d[1]"]',
    nameUser: '//*[@id="d[2]"]',
    commentsField: '//*[@id="d[5]"]',

    // Buttons
    agreementCheckBox: '//*[@id="iqf8bitba_0"]',
    quickAppointButton: '//*[@id="io6k64jo1_0"]',
    notARobot: '/html/body/div[2]/div[3]/div[1]/div/div/span/div[1]',
    callBackButton: '#ioohygh4e_1',
    leaveFeedback: '//*[@id="i6mc8dm46_0"]/div/div/a[1]',  
    sendFeedback: '//*[@id="form_g-anketa"]/div[2]/input',
    treatmentSelector: '//*[@id="d[0]"]',
    implantSelector: '//*[@id="d[0]"]/option[6]',
    purposeSelector : '//*[@id="d[4]"]',
    advertWeb: '//*[@id="d[4]"]/option[4]',
    submitButton: '#i6mc8dm46_0 > div > form > div > table > tbody > tr:nth-child(8) > td.r_c > input',
    
    // Others
    feedbackApproval: '//*[@id="form_g-anketa"]/div[3]',
    appointmentCheckBox: '//*[@id="d[6]"]',
    notARobotMessage: '/html/body/div[1]/form/h2',

    // Modals
    quickFormSent: '//*[@id="i6k2mqrad_0"]',

    // Functions
    fillNameAndPhone: async function(name, phoneNumber) {
        const nameField = await $(this.nameField);
        await nameField.waitForDisplayed();
        await nameField.setValue(name);
        const phoneField = await $(this.phoneField);
        await phoneField.setValue(phoneNumber);
        //check correct values of From and To fields
        await expect(nameField).toHaveValue(name);
        await expect(phoneField).toHaveValue(phoneNumber);
        //const callATaxiButton = await $(this.callATaxiButton);
        //await callATaxiButton.waitForDisplayed();
        //await callATaxiButton.click();
    },

    writeMessage: async function(message) {
        const messageField = await $(this.messageField);
        await messageField.setValue(message);
        //check that message was written
        await expect(messageField).toHaveValue(message);
    },

}