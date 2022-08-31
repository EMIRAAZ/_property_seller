import './agencysidebar.scss';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Dashboard from '../svg/dashboard';
import Agent from '../svg/agent';
import Logout from '../svg/logout';
import ListAgent from '../svg/listagent';
import AddProperty from '../svg/addproperty';

const first = [
  { name: 'Dashboard', link: '/agency', logo: Dashboard },
  // { name: 'List Agent', link: '/agency/list-agent', logo: ListAgent },
  { name: 'Add Agent', link: '/agency/add-agent', logo: Agent },
  { name: 'Add Property', link: '/agency/add-property', logo: AddProperty },
];
const second = [{ name: 'Log Out', link: '', logo: Logout }];

const AgencySidebar = () => {
  return (
    <div className="agency-sidebar">
      <p className="agency-sidebar-header">UAE Assistant</p>
      <ul className="first-list">
        {first.map(item => (
          <RenderSingleList {...item} />
        ))}
      </ul>
      <hr />
      <ul className="second-list">
        {second.map(item => (
          <RenderSingleList {...item} />
        ))}
      </ul>
    </div>
  );
};

const RenderSingleList = ({ name, link, logo }) => {
  let navigate = useNavigate();
  let location = useLocation();
  const getLink = () => location.pathname.split('/').pop();
  const onClick = () => {
    if (name === 'Log Out') {
      localStorage.clear();
      navigate('/agency/login');
    } else {
      navigate(link);
    }
  };

  return (
    <li
      className={getLink() === link.split('/').pop() ? 'active-li' : ''}
      onClick={onClick}
    >
      {logo ? React.createElement(logo, { className: 'logo-sidebar' }) : null}
      <p> {name}</p>
    </li>
  );
};

export default AgencySidebar;