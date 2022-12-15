import Head from 'next/head';

export type SEOData = {
  title: string;
  description: string;
  icon: string;
  url: string;
  thumbnailUrl: string;
};

export type SEOProps = {
  data: SEOData;
};

const SEO = ({ data }: SEOProps): JSX.Element => {
  const { title, description, icon, url, thumbnailUrl } = data;

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnailUrl} />
    </Head>
  );
};

export default SEO;

// https://metatags.io/
