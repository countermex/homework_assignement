import { ReactNode } from 'react';
import styles from './TableRow.module.css';

const TableRow = (props: { children: ReactNode }) => {
  return (
    <tr className={styles.tr}>
      {props.children}
    </tr>
  );
};

export default TableRow;
