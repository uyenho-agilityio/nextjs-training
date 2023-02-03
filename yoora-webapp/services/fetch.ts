// Type
import { FetchingOptions } from '@webapp/types';

export const fetching = async ({ endpoint, method }: FetchingOptions) => {
  let res;

  switch (method) {
    case 'SSG':
      // This request should be cached until manually invalidated.
      // Similar to `getStaticProps`.
      // `force - cache` is the default and can be omitted.
      res = await fetch(endpoint, { cache: 'force-cache' });
      break;
    case 'SSR':
      // This request should be re-fetched on every request.
      // Similar to `getServerSideProps`.
      res = await fetch(endpoint, { cache: 'no-store' });
      break;
    case 'ISR':
      // This request should be cached with a lifetime of 3 seconds.
      // Similar to `getStaticProps` with the `revalidate` option.
      res = await fetch(endpoint, { next: { revalidate: 3 } });
      break;
    default:
      res = await fetch(endpoint, { cache: 'force-cache' });
  }

  if (!res.ok) res;
  return res.json();
};

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const data: Promise<T> = res.json();

  return data;
};
