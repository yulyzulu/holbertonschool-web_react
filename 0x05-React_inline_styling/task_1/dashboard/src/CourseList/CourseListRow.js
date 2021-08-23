import React from 'react';
import Proptypes, { number } from 'prop-types';

function CourseListRow({ isHeader, id, textFirstCell, textSecondCell }) {
  // console.log(textFirstCell);
  let cell;
  const styleBodyRow = { backgroundColor: '#deb5b545' };
  const styleHeaderRow = { backgroundColor: '#f5f5f5ab' };

  if (isHeader) {
    if (!textSecondCell)  {
      cell = <th colSpan="2" >{textFirstCell}</th>;
    } else {
      cell = <><th>{textFirstCell}</th><th>{textSecondCell}</th></>;
    }
  } else {
    cell = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;;
  }

  let styleRow;
  if (isHeader) {
    styleRow = styleHeaderRow;
  } else {
    styleRow = styleBodyRow;
  }
  return (
    <tr key={id} style={styleRow} >{cell}</tr>
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