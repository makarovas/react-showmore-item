import React, { useState, useEffect } from 'react'
import './theme.css';

export const ThemeFunctionalComponent = () => {
 const [theme, setTheme] = useState('light');
 const toDark = () => setTheme('dark');
 const toLight = () => setTheme('light');
 return (
  <div className={theme}>
   {theme === 'light'
    ? <button onClick={toDark}>toDark </button>
    : <button onClick={toLight}>toLight </button>
   }
  </div>
 )
}