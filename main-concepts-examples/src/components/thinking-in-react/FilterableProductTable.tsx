import React from 'react';
import { Product } from '../../type/product';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends React.Component<{ products: Product[] }> {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = (filterText: string): void => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = (inStockOnly: boolean): void => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };

  render(): JSX.Element {
    return (
      <section className="product-table">
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </section>
    );
  }
}
