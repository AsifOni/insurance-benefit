import { ThreeColumnCard as InsuranceThreeColumnCard } from 'ccgx-insurance';

export const ThreeColumnCard = (props) => {
  return (
    <div data-sb-object-id={props.id}>
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
