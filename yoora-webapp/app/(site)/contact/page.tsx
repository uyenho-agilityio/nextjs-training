// Lib
import dynamic from 'next/dynamic';

// Component
const ContactPage = dynamic(() => import('./ContactPage'), {
  ssr: false,
});

const Contact = (): JSX.Element => {
  return <ContactPage />;
};

export default Contact;
