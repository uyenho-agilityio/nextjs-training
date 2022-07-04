import React from 'react';
import { Image } from '~components/commons';
import ManagementList, { FeatureManagementProps } from './ManagementList';
import { MANAGEMENT_LIST, MANAGEMENT_IMAGE_URL } from '~constants/management';

type ManagementProps = {};

export const Management: React.FC<ManagementProps> = (): JSX.Element => {
  const managementList = MANAGEMENT_LIST.map((item: FeatureManagementProps): JSX.Element => {
    return <ManagementList key={item.id} {...item} />;
  });

  return (
    <section className="management d-xl-flex flex-xl-row-reverse align-items-center my-5" id="customers">
      <div className="text-center">
        <Image imageUrl={MANAGEMENT_IMAGE_URL} alt={'management-image'} className={'img-fluid my-5 ps-xl-3'} />
      </div>
      <div>{managementList}</div>
    </section>
  );
};
