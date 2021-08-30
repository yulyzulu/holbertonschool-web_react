import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <div className={css(styles.footer)}>
      <hr className={css(styles.hrColor)} />
      <i>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </i>
    </div>
  );
}

const styles = StyleSheet.create({
  hrColor: {
    backgroundColor: '#e0344b',
    border: 'none',
    height: 2
  },

  footer: {
    textAlign: 'center',
  }

});

export default Footer;