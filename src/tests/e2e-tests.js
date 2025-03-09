import { Selector, ClientFunction } from 'testcafe';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
fixture`React Project Tests`.page`http://localhost:3000`;

// Helper to get page title
const getPageTitle = ClientFunction(() => document.title);

// Test InformationalVideosSection Component
test('InformationalVideosSection should display video titles and descriptions correctly', async t => {
    const videoTitle1 = Selector('h3').withText('How to Play: Intro');
    const videoDescription1 = Selector('p').withText(/Learn the basics/i);
    const subscribeButton = Selector('button').withText(/Subscribe/i);

    await t
        .expect(videoTitle1.exists).ok()
        .expect(videoDescription1.exists).ok()
        .click(subscribeButton);
});

// Test Header Component
test('Header should display navigation links correctly', async t => {
    const gettingStartedLink = Selector('a').withText('Getting Started');
    const featuresButton = Selector('button').withText('Features');
    const githubLink = Selector('a').withText('Github');
    const themeSwitch = Selector('button').child('.ui-switch');

    await t
        .expect(gettingStartedLink.exists).ok()
        .expect(featuresButton.exists).ok()
        .expect(githubLink.exists).ok()
        .click(themeSwitch)
        .expect(themeSwitch.checked).ok();  // Verify theme switch works
});

// Test Footer Component
test('Footer should display social media links correctly', async t => {
    const githubLink = Selector('a').withAttribute('href', /github/i);
    const twitterLink = Selector('a').withAttribute('href', /twitter/i);
    const discordLink = Selector('a').withAttribute('href', /discord/i);

    await t
        .expect(githubLink.exists).ok()
        .expect(twitterLink.exists).ok()
        .expect(discordLink.exists).ok();
});

// Test page title
test('Page should have a correct title', async t => {
    await t.expect(getPageTitle()).eql('Your Page Title');  // Replace with your actual page title
});
