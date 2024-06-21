import { ReactNode } from 'react';
import styles from './Table.module.css';

const Table = (props: { children: ReactNode }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
};

export default Table;
