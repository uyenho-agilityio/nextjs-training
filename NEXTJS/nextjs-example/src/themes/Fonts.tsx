import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'main';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('fonts/Nunito-Regular.woff2') format('woff2')
    }

    @font-face {
      font-family: 'main';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('fonts/Nunito-Light.woff2') format('woff2')
    }

    @font-face {
      font-family: 'main';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('fonts/Nunito-Bold.woff2') format('woff2')
    }

    @font-face {
      font-family: 'sub';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('fonts/Ubuntu-Regular.woff2') format('woff2')
    }
      `}
  />
);

export default Fonts;
