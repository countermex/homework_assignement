import { ReactNode } from 'react';
import styles from './TableRow.module.css';

const TableRow = (props: { children: ReactNode, selected?: boolean }) => {
  return (
    <tr className={`${styles.tr} ${props.selected ? styles.tr_selected : ''}`}>
      {props.children}
    </tr>
  );
};

export default TableRow;
