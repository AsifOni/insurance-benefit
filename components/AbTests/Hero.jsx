import { Button } from '../Button';
import Link from 'next/link';
export const Hero = ({
  id,
  tag,
  heading,
  body,
  href1,
  href2,
  ctaLabel1,
  ctaLabel2,
  styles,
  img,
  subtitle,
  backgroundColor,
  tagColor,
  headingColor,
  bodyColor,
  ctaContainer,
}) => {

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const applyStyles = (styles) => {
    const styleMappings = {
      col: 'column',
      'col-reverse': 'column-reverse',
    };

    const divStyles = {};

    for (const key in styles) {
      const value = styles[key];
      if (typeof value === 'object') {
        for (const subKey in value) {
          divStyles[`${key}${capitalizeFirstLetter(subKey)}`] = value[subKey] + 'px';
        }
      } else {
        divStyles[key] = styleMappings[value] || value;
      }
    }

    return divStyles;
  };

  const buttonStyle = {
    'primary': 'transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700',
    'secondary': 'transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50',
    'tertiary': 'transform rounded-md border border-white px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50'
  }

  return (
    <section className="flex items-center justify-center bg-white" data-sb-object-id={id}>
      <div className="flex" style={{ ...applyStyles(styles.self) }}>
        {img && (
          <img src={img.src} alt={img.alt} className="w-[561px] h-[541px] object-cover" data-sb-field-path=".img" />
        )}
        <div className="mx-auto max-w-[43rem] p-8" style={{ backgroundColor, color: bodyColor }}>
          <div className="text-center">
            <p
              className="text-lg font-medium leading-8 text-indigo-600/95"
              style={{ color: tagColor, ...applyStyles(styles.tag) }}
              data-sb-field-path=".tag"
            >
              {tag}
            </p>
            <h1
              className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black"
              style={{ color: headingColor, ...applyStyles(styles.heading) }}
              data-sb-field-path=".heading"
            >
              {heading}
            </h1>
            <p
              className="mt-3 text-lg leading-relaxed text-slate-400"
              style={{ color: bodyColor, ...applyStyles(styles.body) }}
              data-sb-field-path=".body"
            >
              {body}
            </p>

            <div className="flex mt-6 gap-2">
            {ctaContainer?.map((btnProps, idx) => {
              const { url, id, label, variant } = btnProps;
              const btnCustomStyle = buttonStyle[variant];

              return (
                <div key={`ctaContainer_${idx}`} data-sb-object-id={id}>
                  <a data-sb-field-path="label" href={url} className={btnCustomStyle} style={...applyStyles(styles.label)}>
                    {label}
                  </a>
                </div>
              );
            })}
          </div>
          </div>

          {/* <div className="flex mt-6 gap-2">
            {ctaContainer?.map((btnProps, idx) => {
              const { url, id, label, variant } = btnProps;
              const btnCustomStyle =
                variant === 'primary'
                  ? 'transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700'
                  : 'transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50';

              return (
                <div key={`ctaContainer_${idx}`} data-sb-object-id={id}>
                  <a data-sb-field-path="label" href={url} className={btnCustomStyle} style={...applyStyles(styles.label)}>
                    {label}
                  </a>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};
