import React from 'react';
import { Title, Button } from '~components/commons';
import { FEATURE_LIST, PRODUCT_TITLE, NOW_BTN } from '~constants/product';
import FeatureList, { FeatureProps } from './ProductList';

type ProductProps = {};

export const Product: React.FC<ProductProps> = (): JSX.Element => {
  const featureList = FEATURE_LIST.map((item: FeatureProps): JSX.Element => {
    return <FeatureList key={item.id} {...item} />;
  });

  return (
    <section className="product text-center" id="product">
      <Title children={PRODUCT_TITLE} className={'fs-2 fw-bold mb-5'} lh={'48px'} />
      <ul className="product-list text-md-start row">{featureList}</ul>
      <Button title={NOW_BTN} className={'fw-bold my-3 px-4 py-2'} />
    </section>
  );
};
