import { Card as InsuranceCard } from 'ccgx-insurance';

import { Button } from './Button';

export const Card = (props) => {
  const { id, topImg = {}, linkText, linkUrl, buttonData, className, ...restProps } = props;
  const { src, alt } = topImg;

  let cardFooterProp = {};
  if (linkText) {
    cardFooterProp = {
      footer: (
        <a className="mt-[1.125rem]" href={linkUrl}>
          {linkText}
        </a>
      ),
    };
  }

  if (buttonData) {
    cardFooterProp = {
      footer: buttonData && <Button {...buttonData} />,
    };
  }

  return (
    <div data-sb-object-id={id} className={className}>
      <InsuranceCard topImg={src} imgSRText={alt} {...cardFooterProp} {...restProps} />
    </div>
  );
};
