/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};