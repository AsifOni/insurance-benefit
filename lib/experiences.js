import { ExperienceMapper } from '@ninetailed/experience.js-utils';

export const hasExperiences = (entry) => entry.nt_experiences !== undefined;

export const parseExperiences = (entry) => {
  return hasExperiences(entry)
    ? (entry?.nt_experiences || [])
        .map((experience) => {
          return {
            id: experience.id,
            name: experience.nt_name,
            type: experience.nt_type,
            config: experience.nt_config,
            audience: {
              id: experience?.nt_audience?.nt_audience_id,
            },
            variants: experience?.nt_variants?.map((variant) => {
              return {
                ...variant,
                id: variant.id,
              };
            }),
          };
        })
        .filter((experience) => {
          return ExperienceMapper.isExperienceEntry(experience);
        })
        .map((experience) => {
          return ExperienceMapper.mapExperience(experience);
        })
    : [];
};
