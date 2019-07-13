import React, {useState, useContext, useEffect} from 'react'; // eslint-disable-line no-unused-vars
import AppContext from '../AppContext';
import { Link } from 'react-router-dom'

import useDarkMode from '../hooks/use-dark-mode';
import Toggle from './Toggle';

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
        <div>Routing App with React Hooks and Context (not redux) for Global State</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        Selected Page (in Header): {state.selectedPage}
        <div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </nav>
    </header>
  )

}

export default Header