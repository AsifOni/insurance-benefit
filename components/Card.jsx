import { Card as InsuranceCard } from "ccg-insurance";

export const Card = (props) => {
  const { id, topImg, linkText, linkUrl, ...restProps } = props;
  const { src, alt } = topImg;

  return (
    <div data-sb-object-id={id}>
      <InsuranceCard
        topImg={src}
        imgSRText={alt}
        footer={
          <a className="mt-[1.125rem]" href={linkUrl}>
            {linkText}
          </a>
        }
        {...restProps}
      />
    </div>
  );
};
