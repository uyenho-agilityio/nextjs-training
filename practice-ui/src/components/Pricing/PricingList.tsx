import React from 'react';
import Card, { DetailsProps } from '~components/Pricing/Card';
import { ORDER_BTN } from '~constants/pricing';

export type FeaturePricingProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  unit: string;
  details: DetailsProps;
};

const PricingList: React.FC<FeaturePricingProps> = (props): JSX.Element => {
  const { title, description, price, currency, unit, details } = props;

  return (
    <Card
      title={title}
      text={description}
      price={price}
      currency={currency}
      unit={unit}
      name={ORDER_BTN}
      details={details}
    />
  );
};

export default PricingList;
