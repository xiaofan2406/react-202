const emotionConfig =
  process.env.NODE_ENV === 'production'
    ? { hoist: true }
    : { sourceMap: true, autoLabel: true };

module.exports = {
  siteMetadata: {
    title: 'React 202',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          home: require.resolve('./src/components/HomeLayout'),
          default: require.resolve('./src/components/Layout'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: emotionConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'home',
        path: `${__dirname}/src/pages/index.md`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'react-202',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
