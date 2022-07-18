import React from 'react';

export default class SearchBar extends React.Component<{
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (value: string) => void;
  onInStockChange: (checked: boolean) => void;
}> {
  handleFilterTextChange = (e: { target: { value: string } }): void => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = (e: { target: { checked: boolean } }): void => {
    this.props.onInStockChange(e.target.checked);
  };

  render(): JSX.Element {
    const { filterText, inStockOnly } = this.props;

    return (
      <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={this.handleFilterTextChange} />
        <p>
          <input type="checkbox" checked={inStockOnly} onChange={this.handleInStockChange} /> Only show products in
          stock
        </p>
      </form>
    );
  }
}
