import { useContext } from 'react';
import { ThemeContext } from '@context/ThemeContext';

/**
 * Custom hook to access the theme context
 * This is a convenience wrapper around useContext(ThemeContext)
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
