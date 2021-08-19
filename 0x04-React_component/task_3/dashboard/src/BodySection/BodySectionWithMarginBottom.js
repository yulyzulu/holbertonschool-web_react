import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = { ...this.props};
    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}/>
      </div>
    )
  }
}

BodySection.defaultProps = {
  title: ''
};

BodySection.propTypes = {
  title: PropTypes.string
};

export default BodySectionWithMarginBottom;