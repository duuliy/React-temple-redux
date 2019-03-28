import React from 'react';
import PropTypes from 'prop-types'
import './style.less';

const Footer = ({footer}) => {
    return (
      <div className='footer'>
          {footer}
          {/* global.formatMsg("lang") */}
          {/* {global.formatMsg("lang")} */}
      </div>
    );
  };
  
  Footer.propTypes = {
    footer: PropTypes.string
  };
  
  export default Footer;