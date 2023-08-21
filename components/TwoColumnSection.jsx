import { TwoColumnSection as InsuranceTwoColumnSection } from 'ccgx-insurance';

export const TwoColumnSection = (props) => {
  return (
    <div className="mx-auto my-8 flex justify-between max-w-[80%]" data-sb-object-id={props.id}>
      <InsuranceTwoColumnSection {...props} />
    </div>
  );
};
