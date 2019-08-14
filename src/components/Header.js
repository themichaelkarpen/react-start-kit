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
        <div className="nav__logo">
          <strong>MK</strong>
        </div>
        <div className="nav__main">
          <div><i className="fa fa-home"></i></div>
          <div><i className="fa fa-code"></i></div>
          <div><i className="fa fa-film"></i></div>
          <div><i className="fa fa-cutlery"></i></div>
          <div><i className="fa fa-book"></i></div>
          <div><i className="fa fa-users"></i></div>
        </div>
        <div className="nav__current-label">
          {state.selectedPage}
        </div>
        <div className="flex-break-left">
          <div class="nav__end">
            <ul className="list-inline">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
            <div class="flex-row">
              <div><i className="fa fa-github"></i></div>
              <div><i className="fa fa-instagram"></i></div>
              <div><i className="fa fa-twitter"></i></div>
              <div><i className="fa fa-facebook-square"></i></div>
            </div>
            <ColorModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </nav>
    </header>
  )

}

export default Header