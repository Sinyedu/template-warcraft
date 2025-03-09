import { Selector } from 'testcafe';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
fixture`Login Page`.page`http://localhost:3000/login`;  // Change the URL if different

test('Should login successfully with valid credentials', async t => {
    await t
        .typeText('#email', 'testuser@example.com')
        .typeText('#password', 'password123')
        .click('button[type="submit"]');

    // Check console output for successful login (for demo purposes)
    const consoleMessages = await t.getBrowserConsoleMessages();
    await t.expect(consoleMessages.log).contains('Email:');
    await t.expect(consoleMessages.log).contains('Password:');
});

test('Should show validation error if fields are empty', async t => {
    await t
        .click('button[type="submit"]')
        .expect(Selector('#email').validity.valid).notOk()
        .expect(Selector('#password').validity.valid).notOk();
});
