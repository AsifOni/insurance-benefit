import { Card as InsuranceCard } from './Card';

export const ThreeColumnCard = (props) => {
  const { title, subText, cardData } = props;
  return (
    <div className="md:container mx-auto pad my-8" data-sb-object-id={props.id}>
      {title && (
        <h4 className="mb-[0.75rem]" data-sb-field-path="title">
          {title}
        </h4>
      )}

      {subText && (
        <p className="mb-[3rem]" data-sb-field-path="subText">
          {subText}
        </p>
      )}

      <div className="flex flex-row flex-wrap md:flex-nowrap md:space-x-5">
        {cardData?.map((data, idx) => {
          return <InsuranceCard key={`card-data-${idx}`} {...data} />;
        })}
      </div>
    </div>
  );
};
