import React from 'react';
import { Product } from '../../type/product';

export type ProductProps = {
  product: Product;
};

export default class ProductRow extends React.Component<ProductProps> {
  render(): JSX.Element {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
