import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

// The special children prop
function FancyBorder(props: { color: string; children: JSX.Element | JSX.Element[] }): JSX.Element {
  return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>;
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

// Own convention
function Contacts(): JSX.Element {
  return <div className="Contacts">Contacts</div>;
}

function Chat(): JSX.Element {
  return <div className="Chat">Chat</div>;
}

function SplitPane(props: { left: JSX.Element; right: JSX.Element }): JSX.Element {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function MyApp(): JSX.Element {
  return (
    <>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root-9')!).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
);
