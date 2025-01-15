import { NavLink } from 'react-router-dom';

export const Projects = () => {
  return (
    <div className="Projects">
      <ul className="menu">
        <li className="menuItem">
          <NavLink to="/home">home</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/card">card</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/books">books</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/something">something</NavLink>
        </li>
      </ul>
    </div>
  );
};
