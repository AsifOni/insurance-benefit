import { Hero as InsuranceHero } from 'ccg-insurance';
import { useNinetailed } from '@ninetailed/experience.js-next';

export const Hero = (props) => {
  const { id, img = {}, ...restProps } = props;
  const { src, alt } = img;
  const { track } = useNinetailed();
  const handleEvent = async () => {
    await track('click');
  };

  return (
    <div data-sb-object-id={id}>
      <InsuranceHero
        img={src}
        imgAltText={alt}
        {...restProps}
        className="benefit-hero"
        sbDataAttr={{ heading: 'heading', body: 'body' }}
      />
      <button onClick={() => handleEvent()}>Event test</button>
    </div>
  );
};
