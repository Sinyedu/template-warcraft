import { Selector, ClientFunction } from 'testcafe';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
fixture`React Project Tests`.page`http://localhost:3000`;

const getPageTitle = ClientFunction(() => document.title);

// Test InformationalVideosSection Component
test('InformationalVideosSection should display video titles, descriptions, and subscribe button correctly', async t => {
    // Selectors for video titles
    const videoTitle1 = Selector('h3').withText('Getting Started with Warcraft III Risk');
    const videoTitle2 = Selector('h3').withText('Mastering Advanced Strategies');
    const videoTitle3 = Selector('h3').withText('Multiplayer Tips and Tricks');
    const videoTitle4 = Selector('h3').withText('Understanding Different Game Modes');
    
    // Selectors for video descriptions
    const videoDescription1 = Selector('p').withText('Learn the basics of the game, how to set up, and the initial strategies to win.');
    const videoDescription2 = Selector('p').withText('Take your gameplay to the next level with advanced strategies and tactics.');
    const videoDescription3 = Selector('p').withText('Learn how to work with your team in multiplayer mode and outsmart your opponents.');
    const videoDescription4 = Selector('p').withText('Explore the various game modes available in Warcraft III Risk and how to best use them.');
    
    // Selectors for the subscribe button
    const subscribeButton = Selector('button').withText('Subscribe for More Tips!');

    // Select the section title and subtitle
    const sectionTitle = Selector('h2').withText('How to Play Warcraft III Risk Reforged');
    const sectionSubtitle = Selector('p').withText('Watch these informative videos to understand how to play and master the game!');
    
    // Test Assertions
    await t
        // Verify the section title and subtitle
        .expect(sectionTitle.exists).ok()
        .expect(sectionSubtitle.exists).ok()

        // Verify the video titles
        .expect(videoTitle1.exists).ok()
        .expect(videoTitle2.exists).ok()
        .expect(videoTitle3.exists).ok()
        .expect(videoTitle4.exists).ok()

        // Verify the video descriptions
        .expect(videoDescription1.exists).ok()
        .expect(videoDescription2.exists).ok()
        .expect(videoDescription3.exists).ok()
        .expect(videoDescription4.exists).ok()

        // Verify the subscribe button is displayed and clickable
        .expect(subscribeButton.exists).ok()
        .click(subscribeButton)
        .expect(subscribeButton.exists).ok();  // Verifying the button still exists after click
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
    await t.expect(getPageTitle()).eql('Next.js Template');  // Replace with your actual page title
});
