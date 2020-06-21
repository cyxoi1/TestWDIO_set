// describe('Main Page',  () => {
//     it('should Title main page is present and correct text ', function () {
//         browser.url('https://stage.pasv.us/');
//         const titleProgressMonitor  = "span#site-name";
//         const text = $(titleProgressMonitor).getText();
//         expect(text).toEqual('Progress Monitor');
//     });
//
//     it('should Title main page isclickable', function () {
//         const titleProgressMonitor  = "span#site-name";
//         const result = $(titleProgressMonitor).isClickable();
//         expect(result).toEqual(true);
//     });
//
//     it('should LogIn button is present and correct text and clickable', function () {
//         const logInButton = $('//a[@qa="login-link"]');
//         const btnExist = logInButton.isDisplayed();      //better one it for each test
//         const btnText = logInButton.getText();            //better one it for each test
//         const buttClickable = logInButton.isClickable()//better one it for each test
//
//         expect(btnExist).toEqual(true)          //better one it for each test
//         expect(btnText).toEqual('Login');        //better one it for each test
//         expect(buttClickable).toEqual(true);  //better one it for each test
//     });
//
// })


describe('Register Page Amazon', () => {
    it('should title is Amazon Registration', function () {
        browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&');
       const text = browser.getTitle();
       expect(text).toEqual('Amazon Registration');
    });

    it('should verify Create Account text is present', function () {
        const createAccountText = $('h1');
       expect(createAccountText.getText()).toEqual('Create account');
    });
    // tipa mai bine de bagat totul in variabile..

    it('should verify label text Your name', function () {
        const expected = $('[for="ap_customer_name"]').getText();
        const actual = 'Your name';
        expect(actual).toEqual(expected);
    });

    it('should fill Your name form', function () {
        const nameInput = $('[id="ap_customer_name"]');
        nameInput.setValue('Vasya V');
        const actual = nameInput.getValue();
        const expected = 'Vasya V';
        expect(actual).toEqual(expected);
        browser.pause(2000);
    });
})