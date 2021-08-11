import React from 'react';
import Proptypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let cell;
  if (isHeader) {
    if (!textSecondCell)  {
      cell = <th colSpan="2" >{textFirstCell}</th>;
    } else {
      cell = <><th>{textFirstCell}</th><th>{textSecondCell}</th></>;
    }
  } else {
    cell = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;;
  }
  return (
    <tr>{cell}</tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "",
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: Proptypes.bool,
  textFirstCell: Proptypes.string.isRequired,
  textSecondCell: Proptypes.string,
};


export default CourseListRow;