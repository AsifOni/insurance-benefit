import { Card as InsuranceCard } from 'ccg-insurance';

export const ThreeColumnCard = (props) => {
  const { title, subText, cardData } = props;
  return (
    <div className="md:container mx-auto pad my-8" data-sb-object-id={props.id}>
      {title && <h4 className="mb-[0.75rem]">{title}</h4>}

      {subText && <p className="mb-[3rem]">{subText}</p>}

      <div className="flex flex-row flex-wrap md:flex-nowrap md:space-x-5">
        {cardData?.map((data, idx) => {
          const { id, topImg, linkText, linkUrl, ...restProps } = data;
          const { src, alt } = topImg;
          return (
            <InsuranceCard
              key={`card-data-${idx}`}
              topImg={src}
              imgSRText={alt}
              footer={
                <a className="mt-[1.125rem]" href={linkUrl}>
                  {linkText}
                </a>
              }
              {...restProps}
            />
          );
        })}
      </div>
    </div>
  );
};
