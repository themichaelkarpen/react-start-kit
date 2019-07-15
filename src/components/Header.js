import React, {useState, useContext, useEffect} from 'react'; // eslint-disable-line no-unused-vars
import AppContext from '../AppContext';
import { Link } from 'react-router-dom'

import useDarkMode from '../hooks/use-dark-mode';
import ColorModeToggle from './ColorModeToggle';

// The Header creates links that can be used to navigate between routes.
const Header = () => { 
  
  const {state, dispatch} = useContext(AppContext); // eslint-disable-line no-unused-vars
  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(()=>{
    // nothing yet
  }, [])

  return (
    <header id="header">
      <nav>
        <div>
          <ColorModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <div>LOGO</div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
        <div>Selected Page (in Header): {state.selectedPage}</div>
      </nav>
    </header>
  )

}

export default Header