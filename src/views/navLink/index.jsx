import React from 'react'
import { link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function NavItem (props) {
  const { to = '/', name = '' } = props
  return (
    <div style={{
      width: '100px',
      height: '30px',
      fontSize: '12px',
      lineHeight: '30px',
      textAlign: 'center'
    }}>
      <link to={to}>{name}</link>
    </div>
  )
}

NavItem.PropTypes = {
  to: PropTypes.string,
  name: PropTypes.string
}
