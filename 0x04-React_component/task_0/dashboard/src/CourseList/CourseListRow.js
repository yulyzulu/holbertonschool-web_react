import React from 'react';
import Proptypes, { number } from 'prop-types';

function CourseListRow({ isHeader, id, textFirstCell, textSecondCell }) {
  console.log(textFirstCell)
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
    <tr key={id}>{cell}</tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "",
  textSecondCell: null,
}

CourseListRow.propTypes = {
  id: number,
  isHeader: Proptypes.bool,
  textFirstCell: Proptypes.string.isRequired,
  textSecondCell: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.number
  ]),
};

export default CourseListRow;