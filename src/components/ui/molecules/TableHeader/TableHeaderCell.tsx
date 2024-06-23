import styles from './TableHeaderCell.module.css';

const TableHeaderCell = (props: { headerKey: string, align?: 'left' | 'center' | 'right' }) => {
  return (
    <th id={props.headerKey} className={`${styles.th} ${styles[`th_${props.align || 'left'}`]}`}>
      {props.headerKey}
    </th>
  );
};

export default TableHeaderCell;
