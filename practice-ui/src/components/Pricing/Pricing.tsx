import React from 'react';
import { Title, Text } from '~components/commons';
import { PRICING_LIST, PRICING_HEADER, PRICING_TEXT } from '~constants/pricing';
import PricingList, { FeaturePricingProps } from './PricingList';

type PricingProps = {};

export const Pricing: React.FC<PricingProps> = (): JSX.Element => {
  const pricingList = PRICING_LIST.map((item: FeaturePricingProps): JSX.Element => {
    return <PricingList key={item.id} {...item} />;
  });

  return (
    <section className="pricing text-center my-5 py-3" id="pricing">
      <Title children={PRICING_HEADER} className="fs-1 fw-bold mb-3" />
      <Text children={PRICING_TEXT} className="fw-light mb-5" />

      <div className="d-xl-flex justify-content-between ">{pricingList}</div>
    </section>
  );
};
