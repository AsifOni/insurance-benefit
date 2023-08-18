import { createContext } from 'react';

export const SettingsContext = createContext({});

export default function SettingsProvider(props) {
  const { settings } = props.config?.fields || {};
  return (
    <SettingsContext.Provider
      value={(settings || []).reduce((acc, current) => {
        return { ...acc, [current.fields.settingKey]: current };
      }, {})}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}