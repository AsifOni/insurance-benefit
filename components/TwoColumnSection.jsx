import { TwoColumnSection as InsuranceTwoColumnSection } from 'ccg-insurance';

export const TwoColumnSection = (props) => {

  return (
    <div className="md:container mx-auto my-8 flex justify-between" data-sb-object-id={props.id}>
      <InsuranceTwoColumnSection {...props}/>
    </div>
  );
};
