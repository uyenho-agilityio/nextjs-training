import React from 'react';
import ReactDOM from 'react-dom/client';

interface FormProps {}

interface FormState {
  value: string;
  isGoing: boolean;
  numberOfGuests: number;
}

class Form extends React.Component<FormProps, FormState> {
  state = {
    value: 'mango',
    isGoing: true,
    numberOfGuests: 2,
  };

  handleSubmit = (event: { preventDefault: () => void }): void => {
    alert('A form was submitted: ' + this.state.value + ' - ' + this.state.isGoing + ' - ' + this.state.numberOfGuests);
    event.preventDefault();
  };

  handleSelectChange = (event: { target: { value: string } }): void => {
    this.setState({ value: event.target.value });
  };

  handleInputChange = (event: { target: { type: string; checked: boolean; value: string; name: string } }): void => {
    const elementClicked = event.target;
    const value = elementClicked.type === 'checkbox' ? elementClicked.checked : elementClicked.value;
    const name: string = elementClicked.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Handling Multiple Inputs</h2>
        <label>
          Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root-6')!).render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
);
