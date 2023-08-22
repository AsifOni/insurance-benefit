export const Hero = ({ id, tag, heading, body, href1, href2, ctaLabel1, ctaLabel2, styles, subtitle, tagColor }) => {
  // const fontSizeEditor = fontSize?.self?.fontSize;
  console.log('styles', styles);
  console.log('subtitle', subtitle);
  return (
    <section className="flex items-center justify-center bg-white" data-sb-object-id={id}>
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p
            className="text-lg font-medium leading-8 text-indigo-600/95"
            style={{ color: tagColor, fontSize: styles.tag.fontSize }}
            data-sb-field-path=".tag"
          >
            {tag}
          </p>
          <h1
            className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black"
            // style={{fontSize: `${fontSizeEditor}px`}}
          >
            {heading}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">{body}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={href1}
            className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            {ctaLabel1}
          </a>
          <a
            href={href2}
            className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
          >
            {ctaLabel2}
          </a>
        </div>
      </div>
    </section>
  );
};
