import { Hero as InsuranceHero } from 'ccgx-insurance';
import { useNinetailed } from '@ninetailed/experience.js-next';

export const Hero = (props) => {
  const { id, img = {}, personalization = {}, ...restProps } = props;
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
      >
        {personalization?.isPersonalization && (
          <button
            className="transform rounded-md bg-indigo-600/95 mt-6 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            onClick={() => handleEvent()}
          >
            {personalization.buttonLabel}
          </button>
        )}
      </InsuranceHero>
    </div>
  );
};
