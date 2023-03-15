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
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="preload" href="/images/hero-section/hero.webp" as="image" />
      <link
        rel="preload"
        href="/_next/static/media/b1dca2a5d44fc7a4.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/_next/static/media/22539d17f3707926.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/_next/static/media/12084922609e6532.p.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="preload" href="/_next/static/css/a6b765653498d7a5.css" as="style" />

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
