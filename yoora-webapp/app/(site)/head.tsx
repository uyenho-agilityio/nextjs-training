// Lib
// import Script from 'next/script';

// Constant
import { SEO_DATA as metaData } from '@webapp/constants';

const Head = (): JSX.Element => {
  const { title, description, icon, url, thumbnailUrl } = metaData;

  return (
    <>
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

      {/* Fail to apply Partytown */}
      {/* <Partytown debug forward={['dataLayer.push']} />
      <Script
        id="google-tag"
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=${String(
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
        )}`}
      />
      <Script
        id="google-tag-manager"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)}');
          `,
        }}
      /> */}

      {/* Add Google Analytics without using partytown */}
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${String(
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
        )}`}
      />

      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${String(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}
    </>
  );
};

export default Head;
