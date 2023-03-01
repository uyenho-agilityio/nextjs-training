// Lib
import dynamic from 'next/dynamic';

// Component
const ContactPage = dynamic(() => import('./ContactPage'));

const Contact = (): JSX.Element => {
  return <ContactPage />;
};

export default Contact;
