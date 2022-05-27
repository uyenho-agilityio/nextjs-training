import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  date: Date;
}

function Clocks(props: Props): JSX.Element {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function ticks(): void {
  ReactDOM.render(<Clocks date={new Date()} />, document.getElementById('root-1'));
}

setInterval(ticks, 1000);

// Converting a Function to a Class
class Clock extends React.Component<{}, { date: Date }> {
  timerID?: number;
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount(): void {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerID);
  }

  tick(): void {
    this.setState({
      date: new Date(),
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Hi!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick(): void {
  ReactDOM.render(<Clock />, document.getElementById('root-2'));
}

setInterval(tick, 1000);
