import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection { ...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40
  }
});

BodySection.defaultProps = {
  title: ''
};

BodySection.propTypes = {
  title: PropTypes.string
};

export default BodySectionWithMarginBottom;