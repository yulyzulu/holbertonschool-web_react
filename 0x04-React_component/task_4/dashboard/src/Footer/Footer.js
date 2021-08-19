import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer">
      <hr />
      <i>
        Copyright {getFullYear()} - {getFooterCopy()}
      </i>
    </div>
  );
}

export default Footer;