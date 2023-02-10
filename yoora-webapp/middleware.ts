// Libs
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Constants
import { PAGE_ROUTES, PROTECTED_ROUTES } from '@webapp/constants';

export const middleware = (req: NextRequest): NextResponse => {
  const token = req.cookies.get('accessToken')?.value;
  const index = PROTECTED_ROUTES.indexOf(req.nextUrl.pathname);

  // If user is unauthenticated, redirect to LoginPage
  if (index > -1 && !token) {
    return NextResponse.redirect(new URL(PAGE_ROUTES.LOGIN, req.url));
  }

  return NextResponse.next();
};
