import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance } from 'react-native';

const themes = {
  light: {
    background: '#fff',
    text: '#1A1A1A',
    primary: '#007AFF',
  },
  dark: {
    background: '#1A1A1A',
    text: '#fff',
    primary: '#0A84FF',
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  mode: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [mode, setMode] = useState(colorScheme || 'light');

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setMode(colorScheme || 'light');
    });
    return () => listener.remove();
  }, []);

  const toggleTheme = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme: themes[mode], mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};