import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import * as preview from '../../images/preview.png';

interface Props {
    title?: string;
}

const MetaData: FunctionComponent<Props> = ({  }: Props) => {
    const title = 'Hageveld Brugklas';
    const siteUrl = 'https://brugklas.hageveld.dev';
    const description = 'Aanmeldformulier voor de brugklas op het Atheneum College Hageveld';
    const author = 'Atheneum College Hageveld';
    const keywords = 'Atheneum, College, Hageveld, VWO, Heemstede, Groep 8, Brugklas, Basisschool';

    return (
        <Helmet htmlAttributes={{ lang: 'nl' }}>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="apple-mobile-web-app-title" content={title} />
            <meta name="description" content={description} />
            <meta name="author" content={author} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="nl_NL" />
            <meta property="og:image" content={`${siteUrl}${preview}`} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Hageveld" />
            <meta name="twitter:creator" content="@Hageveld" />
            <meta name="twitter:image" content={`${siteUrl}${preview}`} />
            <meta name="theme-color" content="#E67200" />
            <meta name="mobile-web-app-capable" content="yes" />
        </Helmet>
    );
};

export default MetaData;
