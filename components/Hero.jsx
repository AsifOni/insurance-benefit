import { useContext } from 'react';
import { Hero as InsuranceHero } from 'ccg-insurance';
import { useNinetailed } from '@ninetailed/experience.js-next';
import { SettingsContext } from '../lib/SettingsProvider';

export const Hero = (props) => {
  const { id, img = {}, ...restProps } = props;
  const { src, alt } = img;
  const { page, track, identify } = useNinetailed();
  const handleEvent = async () => {
    // await track('click');
  }
  const settings = useContext(SettingsContext);
  const heroLayoutSetting = settings['heroLayout'] || {};
  console.log('heroLayoutSetting', heroLayoutSetting);
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
