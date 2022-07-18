import React from 'react';
import ReactDOM from 'react-dom/client';

class Toggle extends React.Component<{}, { isToggleOn: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render(): JSX.Element {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>;
  }
}

ReactDOM.createRoot(document.getElementById('root-3')!).render(
  <React.StrictMode>
    <Toggle />
  </React.StrictMode>,
);
