module.exports = {
    siteMetadata: {
        title: 'Hageveld Brugklas',
        siteUrl: 'https://brugklas.hageveld.dev',
        description: 'Aanmeldformulier voor de brugklas op het Atheneum College Hageveld',
        author: 'Atheneum College Hageveld',
        keywords: 'Atheneum, College, Hageveld, VWO, Heemstede, Groep 8, Brugklas, Basisschool'
    },
    pathPrefix: '/',
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'src/images'
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-less',
            options: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': `#5B34AD`
                }
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Hageveld Brugklas',
                short_name: 'Hageveld Brugklas',
                start_url: '/',
                background_color: '#5B34AD',
                theme_color: '#E67200',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png'
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                cssLoaderOptions: {
                    camelCase: false
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {
                        userAgent: '*',
                        allow: '/'
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-antd',
            options: {
                style: true
            }
        },
        'gatsby-plugin-remove-trailing-slashes'
    ]
};
