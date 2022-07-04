import React from 'react';
import { BtnVariants, TextVariants, TitleVariants } from '~enums/variant';
import { Title, Text, Button } from '~components/commons';

export type DetailsProps = {
  [key: string]: string;
};

type CardProps = {
  title: string;
  text: string;
  price: number;
  currency: string;
  unit: string;
  name: string;
  details: DetailsProps;
  titleVariant?: TitleVariants;
  textVariant?: TextVariants;
};

const Card: React.FC<CardProps> = ({
  title,
  text,
  price,
  currency,
  unit,
  name,
  details,
  titleVariant = TitleVariants.Card,
  textVariant = TextVariants.Card,
}): JSX.Element => {
  return (
    <div className="card mx-auto mb-4 mx-xl-0 text-center text-dark rounded-4" style={{ width: 325 }}>
      <div className="card-body my-3 animation">
        <Title children={title} variant={titleVariant} className={'fw-bold fs-4'} lh={'40px'} />
        <Text children={text} variant={textVariant} className={'mb-2'} lh={'40px'} />

        <div className="row my-3">
          <div className="col text-end">
            <Text children={price} className={'highlight highlight-number fw-bold'} />
          </div>
          <div className="col text-start px-0 mt-3">
            <Text children={currency} className={'highlight fw-bold fs-4'} lh={'30px'} />
            <Text children={unit} className={'text-muted mt-2'} lh={'19px'} />
          </div>
        </div>

        <div className="secondary-font">
          <Text children={details.first} className={'mb-1'} />
          <Text children={details.second} className={'mb-1'} />
          <Text children={details.third} className={'mb-1'} />
        </div>

        <Button title={name} variant={BtnVariants.Primary} className={'third-font btn-lg mt-4'} />
      </div>
    </div>
  );
};

export default Card;
