import { Hero as InsuranceHero } from 'ccg-insurance';

export const Hero = (props) => {
  const { id, img = {}, ...restProps } = props;
  const { src, alt } = img;
  return (
    <div data-sb-object-id={id}>
      <InsuranceHero img={src} imgAltText={alt} {...restProps} className="benefit-hero" />
    </div>
  );
};
