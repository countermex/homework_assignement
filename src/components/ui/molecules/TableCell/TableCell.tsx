import { ReactNode } from 'react';
import styles from './TableCell.module.css';

const TableCell = (props: { children: ReactNode, headers?: string, highlight?: boolean, capitalize?: boolean }) => {
  return (
    <td className={`${styles.td} ${props.highlight ? styles.td_highlight : ''} ${props.capitalize ? styles.td_capitalize : ''}`} headers={props.headers}>
      {props.children}
    </td>
  );
};

export default TableCell;
