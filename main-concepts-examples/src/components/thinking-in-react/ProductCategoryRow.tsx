import React from 'react';

type CategoryProps = {
  category: string;
};

export default class ProductCategoryRow extends React.Component<CategoryProps> {
  render(): JSX.Element {
    const category = this.props.category;

    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}
