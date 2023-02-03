'use client';

// Libs
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

// Constants
import { PAGE_ROUTES, PROTECTED_ROUTES, STORAGE_KEYS } from '@webapp/constants';

// Type
import { User } from '@webapp/models';

// Util
import { getStorage } from '@webapp/utils';

// Hook
import { useAuth } from '@webapp/hooks';

const AuthGuard = ({ children }: { children: ReactNode }): JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();

  const { isAuthenticated } = useAuth();
  const index = PROTECTED_ROUTES.indexOf(pathname ?? '');

  useEffect(() => {
    const currentUser = getStorage(STORAGE_KEYS.CURRENT_USER) as unknown as User;

    if (index > -1 && (!isAuthenticated || !currentUser)) router.push(PAGE_ROUTES.LOGIN);
  }, [index, isAuthenticated, router]);

  return <>{children}</>;
};

export default AuthGuard;
