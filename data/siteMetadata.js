/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Nexical Space',
  author: 'Marco Lagos',
  headerTitle: 'Nexical Space',
  description: 'A conduit uniting disparate elements.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://nexical.space',
  siteRepo: 'https://github.com/marcolagos/nexical-space',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  mastodon: 'https://mastodon.social/@marcoalagosjr',
  email: 'marcoalagosjr@gmail.com',
  github: 'https://github.com/marcolagos',
  twitter: 'https://twitter.com/marcoalagosjr',
  facebook: 'https://www.facebook.com/profile.php?id=100054551763304',
  youtube: 'https://www.youtube.com/channel/UCyusyT8bDUXwWoKHZJVcsQA',
  linkedin: 'https://www.linkedin.com/in/marcolagos/',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
