import React from 'react';
import Proptypes from 'prop-types';

function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null }) {
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

CourseListRow.propTypes = {
  isHeader: Proptypes.bool,
  textFirstCell: Proptypes.string.isRequired,
  textSecondCell: Proptypes.string,
};

export default CourseListRow;