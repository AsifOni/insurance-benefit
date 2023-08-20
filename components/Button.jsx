import { Button as InsuranceButton } from 'ccgx-insurance';

export const Button = (props) => {
  const { label, id } = props;
  return (
    <div data-sb-object-id={id}>
      <InsuranceButton label={label} sbDataAttr={{ label: 'label' }} />
    </div>
  );
};
