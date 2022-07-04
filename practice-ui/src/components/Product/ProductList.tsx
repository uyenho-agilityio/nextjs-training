import React from 'react';
import { Image, Title, Text } from '~components/commons';
import { TitleVariants } from '~enums/variant';

export type FeatureProps = {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
};

const ProductList: React.FC<FeatureProps> = (props): JSX.Element => {
  const { imageUrl, alt, title, description } = props;

  return (
    <li className="product-item mb-4 col-md-6 col-xl-3">
      <Image imageUrl={imageUrl} alt={alt} width={'50px'} />
      <Title children={title} variant={TitleVariants.Subtitle} className={'fw-normal fs-5 my-2'} lh={'33px'} />
      <Text children={description} />
    </li>
  );
};

export default ProductList;
