import { MouseEventHandler, ReactNode } from 'react';
import styles from './TableRow.module.css';

const TableRow = (props: { children: ReactNode, selected?: boolean, onClick?: MouseEventHandler<HTMLTableRowElement> }) => {
  return (
    <tr className={`${styles.tr} ${props.selected ? styles.tr_selected : ''}`} onClick={props.onClick}>
      {props.children}
    </tr>
  );
};

export default TableRow;
