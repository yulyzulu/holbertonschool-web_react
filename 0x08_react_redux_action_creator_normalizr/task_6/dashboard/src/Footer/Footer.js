import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {
        (context) => {
          return (
            <div className={css(styles.footer)}>
              <hr className={css(styles.hrColor)} />
              <i>
                Copyright {getFullYear()} - {getFooterCopy(true)}
              </i>
              {context.user.isLoggedIn && <a href="#"> Contact us</a> }
            </div>
          );
        }
      }
    </AppContext.Consumer>
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