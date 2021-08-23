import React from 'react';
import Proptypes, { number } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, id, textFirstCell, textSecondCell }) {
  let cell;
  const styleBodyRow = { backgroundColor: '#deb5b545' };
  const styleHeaderRow = { backgroundColor: '#f5f5f5ab' };

  if (isHeader) {
    if (!textSecondCell)  {
      cell = <th colSpan="2" className={css(styles.headerRow)} >{textFirstCell}</th>;
    } else {
      cell =
        <>
          <th className={css(styles.headerRow, styles.defaultRow)} >{textFirstCell}</th>
          <th className={css(styles.headerRow, styles.defaultRow)}>{textSecondCell}</th>
        </>;
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

const styles = StyleSheet.create({
  headerRow: {
    textAlign: 'center',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray'
  },
  defaultRow: {
    textAlign: 'left'
  }
})

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