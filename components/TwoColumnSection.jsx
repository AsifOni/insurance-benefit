import { Card as InsuranceCard } from './Card';
import Image from 'next/image';

export const TwoColumnSection = (props) => {
  const { img: masterImg = {}, cardData = {} } = props;
  const { src: masterSrc, alt: masterAlt } = masterImg;

  return (
    <div className="md:container mx-auto my-8 flex justify-between" data-sb-object-id={props.id}>
      {cardData && <InsuranceCard className={'w-1/2'} {...cardData} />}
      <Image src={masterSrc} alt={masterAlt} width={520} height={412} />
    </div>
  );
};
