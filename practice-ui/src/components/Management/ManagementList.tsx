import React from 'react';
import { Text } from '~components/commons';
import { TextVariants } from '~enums/variant';

export type FeatureManagementProps = {
  id: number;
  title: string;
  highlight: string;
  description: string;
};

const ManagementList: React.FC<FeatureManagementProps> = (props): JSX.Element => {
  const { title, highlight, description } = props;

  return (
    <ul className="management-list pe-xl-5">
      <li className="management-item">
        <Text children={title} className={'fw-normal'} />
        <Text children={highlight} variant={TextVariants.Highlight} className={'fw-bold fs-2 mt-1 mb-3'} lh={'48px'} />
        <Text children={description} className={'mb-3'} />
      </li>
    </ul>
  );
};

export default ManagementList;
