import { Experience } from '@ninetailed/experience.js-next';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { ComponentRegistry } from '../utils/registry.js';
import { hasExperiences, parseExperiences } from '../lib/experiences.js';

const componentMap = ComponentRegistry();

const ComponentRenderer = (props) => {
  const contentTypeId = props?.type;
  const Component = componentMap[contentTypeId];
  const liveUpdateProps = useContentfulLiveUpdates(props);

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  // eslint-disable-next-line
  // @ts-ignore
  return <Component {...liveUpdateProps} />;
};

const BlockRenderer = ({ blocks = [] }) => {
  return (
    <>
      {blocks.map((block, idx) => {
        const parsedExperiences = parseExperiences(block);
        const isExperienceEnabled = hasExperiences(block);
        const contentTypeId = block?.type;

        return (
          <div key={`${contentTypeId}_${idx}`}>
            {isExperienceEnabled ? (
              <Experience {...block} id={block.id} component={ComponentRenderer} experiences={parsedExperiences} />
            ) : (
              <ComponentRenderer {...block} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default BlockRenderer;
