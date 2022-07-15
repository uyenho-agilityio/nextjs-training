import React from 'react';
import { Product } from '../../type/product';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export type TableProps = {
  filterText: string;
  inStockOnly: boolean;
  products: Product[];
};

export default class ProductTable extends React.Component<TableProps> {
  render(): JSX.Element {
    const { filterText, inStockOnly, products } = this.props;

    const rows: JSX.Element[] = [];
    let lastCategory: string = '';

    products.forEach((product: Product) => {
      if (product.name.toLowerCase().indexOf(filterText) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table style={{ display: 'inline-table' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
