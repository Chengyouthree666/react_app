import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem({ to, name }) {
  return (
    <Link style={{
      // color: '#ccc'
    }} to={to}>{name}</Link>
  );
}

NavItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string
};

export default NavItem;
