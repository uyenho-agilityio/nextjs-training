// Lib
import dynamic from 'next/dynamic';

// Component
const LoginForm = dynamic(() => import('@webapp/components').then(mod => mod.LoginForm), {
  ssr: false,
});

const LoginPage = (): JSX.Element => {
  return <LoginForm />;
};

export default LoginPage;
