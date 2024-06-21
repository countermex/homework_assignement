import { ReactNode } from 'react';
import styles from './TableCell.module.css';

const TableCell = (props: { children: ReactNode, headers?: string }) => {
  return (
    <td className={styles.td} headers={props.headers}>
      {props.children}
    </td>
  );
};

export default TableCell;
