import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

function BreadCrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className='breadcrumb-wrapper background'>
      <nav>
        <NavLink to='/'><AiFillHome /></NavLink>
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <span key={index}> {/* Use index as key */}
              <NavLink to={routeTo} exact={isLast.toString()}>
                {pathname}
              </NavLink>
              {!isLast && <span> | </span>} {/* Separator */}
            </span>
          );
        })}
      </nav>
    </div>
  );
}

export default BreadCrumb;
