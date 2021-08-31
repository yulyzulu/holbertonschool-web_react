import React from 'react';
import Proptypes, { number } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, id, textFirstCell, textSecondCell }) {
  const [checkboxCheck, setCheckboxCheck] = React.useState(false);
  let cell;
  const styleBodyRow = { backgroundColor: '#deb5b545' };
  const styleHeaderRow = { backgroundColor: '#f5f5f5ab' };

  const checkToggle = () => setCheckboxCheck(!checkboxCheck);

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
    cell = <>
        <td>
          <input type="checkbox" onClick={checkToggle} />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </>;;
  }

  let styleRow;
  if (isHeader) {
    styleRow = styleHeaderRow;
  } else {
    styleRow = styleBodyRow;
  }
  return (
    <tr key={id} className={css(checkboxCheck ? styles.rowChecked : '')}  style={styleRow} >{cell}</tr>
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
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
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