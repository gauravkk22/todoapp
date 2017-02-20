import React, { PropTypes } from 'react';
import '../styles/footer.css';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span className="active">{children}</span>
  }

  return (
    <span className="not_active"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </span>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
