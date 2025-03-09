import { Selector } from 'testcafe';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
fixture`Register Page`.page`http://localhost:3000/register`;  // Change the URL if different

test('Should register a new user successfully', async t => {
    await t
        .typeText('#username', 'testuser')
        .typeText('#email', 'testuser@example.com')
        .typeText('#password', 'password123')
        .click('button[type="submit"]');

    // Check console output for successful registration (for demo purposes)
    const consoleMessages = await t.getBrowserConsoleMessages();
    await t.expect(consoleMessages.log).contains('Registering:');
    await t.expect(consoleMessages.log[0]).contains('"username":"testuser"');
    await t.expect(consoleMessages.log[0]).contains('"email":"testuser@example.com"');
});

test('Should show validation error if required fields are empty', async t => {
    await t
        .click('button[type="submit"]')
        .expect(Selector('#username').validity.valid).notOk()
        .expect(Selector('#email').validity.valid).notOk()
        .expect(Selector('#password').validity.valid).notOk();
});
