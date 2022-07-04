import React from 'react';
import ReactDOM from 'react-dom/client';

interface WarnProps {
  warn: boolean;
}

function WarningBanner(props: WarnProps): JSX.Element | null {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  state = { showWarning: true };

  handleToggleClick = (): void => {
    this.setState({
      showWarning: !this.state.showWarning,
    });
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root-4')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
