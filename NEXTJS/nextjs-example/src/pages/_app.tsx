import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from 'src/themes/chakra';

import { AppPropsWithLayout } from 'src/models';
import { DefaultLayout, ErrorBoundary } from 'src/layouts';
import { Fonts } from 'src/themes';

const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const Layout = Component.Layout ?? DefaultLayout;

  return (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Fonts />
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
