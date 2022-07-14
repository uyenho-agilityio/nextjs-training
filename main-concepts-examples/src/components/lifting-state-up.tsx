import React from 'react';
import ReactDOM from 'react-dom/client';

function BoilingVerdict(props: { celsius: number }): JSX.Element {
  if (props.celsius >= 100) {
    return <p className="boil">The water would boil.</p>;
  }
  return <p className="not-boil">The water would not boil.</p>;
}

function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (input: number) => number): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface ScaleNames {
  c: string;
  f: string;
}

const scaleNames: ScaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component<{
  temperature: string;
  scale: string;
  onTemperatureChange: (value: string) => void;
}> {
  handleChange = (e: { target: { value: string } }): void => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature: string = this.props.temperature;
    const scale: string = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale as keyof ScaleNames]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component<{}, { temperature: string; scale: string }> {
  state = { temperature: '', scale: 'c' };

  handleCelsiusChange = (temperature: string): void => {
    this.setState({ scale: 'c', temperature });
  };

  handleFahrenheitChange = (temperature: string): void => {
    this.setState({ scale: 'f', temperature });
  };

  render() {
    const scale: string = this.state.scale;
    const temperature: string = this.state.temperature;
    const celsius: string = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit: string = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root-8')!).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
);
