import type { NextRouter } from 'next/router';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = jest.spyOn(require('next/navigation'), 'useRouter');
const mockUseNextRouter = router;

export const createMockRouter = (router: Partial<NextRouter | null>) => {
  return {
    basePath: '',
    pathname: '/',
    asPath: '/',
    route: '/',
    query: {},
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    isPreview: false,
    forward: () => null,
    ...router,
  };
};

/**
 * Mock the `useRouter()` hook and return the mocked router instance
 */
export const mockNextRouter = (router: Partial<NextRouter> = {}) => {
  const mockRouter = createMockRouter(router);
  mockUseNextRouter.mockReturnValue(mockRouter);

  return mockRouter;
};
