import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  
    // useLocation() : To get triggered or rendered URL or path . In This case from router in 'App.js'
  const { pathname } = useLocation();

  const isActive = (path) => {
    // decodeURIComponent() to remove '%20' from path
    return path === decodeURIComponent(pathname) ? 'active' : '';
  };

  return (
    <header className='menu-header'>
      <nav>
        <ul className='menu'>
          <li>
            <Link to="/" className={`link-content ${isActive("/")}`}> {/*To assign className='active' for changing color of active link */}
              Home
            </Link>
          </li>
          <li>
            <Link to="/To Do List" className={`link-content ${isActive("/To Do List")}`}>
              Task List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
