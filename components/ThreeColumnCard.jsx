import { ThreeColumnCard as InsuranceThreeColumnCard } from 'ccg-insurance';

export const ThreeColumnCard = (props) => {
  return (
    <div className="md:container mx-auto pad my-8" data-sb-object-id={props.id}>
      <InsuranceThreeColumnCard
        {...props}
        sbDataAttr={{
          title: 'title',
          subText: 'subText',
        }}
      />
    </div>
  );
};
