import React from 'react';
import ReactDOM from 'react-dom/client';

const numbers = [1, 2, 3, 4, 5, 6];

function ListItem(props: { value: number }): JSX.Element {
  return <li>{props.value}</li>;
}

function NumberList(props: { numbers: number[] }): JSX.Element {
  const numbers = props.numbers;

  const listItems = numbers.map(number => <ListItem key={number.toString()} value={number} />);
  return (
    <>
      <h2>Item List</h2>
      <ul>{listItems}</ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root-5')!).render(
  <React.StrictMode>
    <NumberList numbers={numbers} />
  </React.StrictMode>,
);
